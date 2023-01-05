import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetPokemonsQuery } from './get-pokemons.query';
import { PokemonApiService } from 'src/pokemon/api/pokemon.api.service';
import {
  PokemonList,
  PokemonResultList,
} from 'src/pokemon/types/pokemon.types';

@QueryHandler(GetPokemonsQuery)
export class GetPokemonsHandler implements IQueryHandler<GetPokemonsQuery> {
  constructor(private readonly pokemonApiService: PokemonApiService) {}

  async execute(query: GetPokemonsQuery): Promise<PokemonList> {
    const MAX_POKEMON = 905;
    try {
      const pokemonList: PokemonResultList =
        await this.pokemonApiService.getPokemonList(query);

      const pokemonPromises = pokemonList.result.reduce((acc, pokemonItem) => {
        if (pokemonItem.id <= MAX_POKEMON) {
          acc.push(this.pokemonApiService.getPokemon(pokemonItem.id));
        }
        return acc;
      }, []);

      return {
        count: pokemonList.count,
        data: await Promise.all(pokemonPromises),
      };
    } catch (error) {
      throw new Error(`Error fetching `);
    }
  }
}
