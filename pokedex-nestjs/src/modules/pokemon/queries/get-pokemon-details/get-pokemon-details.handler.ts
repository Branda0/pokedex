import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetPokemonDetailsQuery } from './get-pokemon-details.query';
import { PokemonApiService } from 'src/modules/pokemon/api/pokemon.api.service';
import { PokemonDetails } from 'src/modules/pokemon/types/pokemon.types';

@QueryHandler(GetPokemonDetailsQuery)
export class GetPokemonDetailsHandler
  implements IQueryHandler<GetPokemonDetailsQuery>
{
  constructor(private readonly pokemonApiService: PokemonApiService) {}

  async execute(query: GetPokemonDetailsQuery): Promise<PokemonDetails> {
    try {
      return await this.pokemonApiService.getPokemonDetails(query.pokemonId);
    } catch (error) {
      throw new Error(
        `Error fetching Pokemon details with id ${query.pokemonId}: ${error.message}`,
      );
    }
  }
}
