import { ICommandHandler, CommandHandler } from '@nestjs/cqrs';
import { Result } from 'src/lib/result.type';
import { PokemonRepository } from 'src/modules/pokemon/repository/pokemon.repository';
import { TrainerRepository } from '../../repository/trainer.repository';
import { CatchPokemonCommand } from './catch-pokemon.command';
import { CatchPokemonResponseDto } from './catch-pokemon.dtos';
import { PokemonMapper } from 'src/modules/pokemon/pokemon.mapper';
import { PokemonApiService } from 'src/modules/pokemon/api/pokemon.api.service';

@CommandHandler(CatchPokemonCommand)
export class CatchPokemonHandler
  implements ICommandHandler<CatchPokemonCommand>
{
  constructor(
    private readonly trainerRepository: TrainerRepository,
    private readonly pokemonRepository: PokemonRepository,
    private readonly pokemonMapper: PokemonMapper,
    private readonly pokemonApiService: PokemonApiService,
  ) {}

  async execute(
    command: CatchPokemonCommand,
  ): Promise<Result<CatchPokemonResponseDto, string>> {
    const trainerEntity = await this.trainerRepository.findOneById(
      command.trainerId,
    );

    if (!!trainerEntity === false)
      return { status: 'err', data: "Trainer doesn't exists" };

    trainerEntity.catchPokemon(command.pokemonId);

    console.log('after');

    const pokemonRecord = await this.pokemonRepository.findOneById(
      command.pokemonId,
    );

    const pokemonEntity =
      (pokemonRecord ? this.pokemonMapper.toDomain(pokemonRecord) : null) ??
      this.pokemonMapper.fromApiToDomain(
        await this.pokemonApiService.getPokemon(command.pokemonId),
        new Date(),
      );

    pokemonRecord ?? (await this.pokemonRepository.insert(pokemonEntity));

    const updatedTrainer = await this.trainerRepository.addPokemon(
      command.trainerId,
      command.pokemonId,
    );

    return {
      status: 'ok',
      data: { catchedPokemons: updatedTrainer.getPokemons() },
    };
  }
}
