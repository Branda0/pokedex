import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetPokemonQuery } from './get-pokemon.query';
import { PokemonApiService } from 'src/pokemon/api/pokemon.api.service';
import { Pokemon } from 'src/pokemon/types/pokemon.types';

@QueryHandler(GetPokemonQuery)
export class GetPokemonHandler implements IQueryHandler<GetPokemonQuery> {
  constructor(private readonly pokemonApiService: PokemonApiService) {}

  async execute(query: GetPokemonQuery): Promise<Pokemon> {
    const MAX_POKEMON = 905;
    try {
      if (query.pokemonId > MAX_POKEMON || query.pokemonId < 1) {
        throw new Error('400');
      } else {
        return await this.pokemonApiService.getPokemon(query.pokemonId);
      }
    } catch (error) {
      if (error.message === '400') throw new Error('400');

      throw new Error(
        `Error fetching Pokemon with id ${query.pokemonId}: ${error.message}`,
      );
    }
  }
}
