import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetPokemonQuery } from './get-pokemon.query';
import { PokemonApiService } from 'src/pokemon/api/pokemon.api.service';
import { Pokemon } from 'src/pokemon/types/pokemon.types';

@QueryHandler(GetPokemonQuery)
export class GetPokemonHandler implements IQueryHandler<GetPokemonQuery> {
  constructor(private readonly pokemonApiService: PokemonApiService) {}

  async execute(query: GetPokemonQuery): Promise<Pokemon> {
    try {
      return await this.pokemonApiService.getPokemon(query.pokemonId);
    } catch (error) {
      throw new Error(
        `Error fetching Pokemon with id ${query.pokemonId}: ${error.message}`,
      );
    }
  }
}
