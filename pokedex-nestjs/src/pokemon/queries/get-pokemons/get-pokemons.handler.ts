import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetPokemonsQuery, GetPokemonQueryProps } from './get-pokemons.query';
import { PokemonApiService } from 'src/pokemon/api/pokemon.api.service';

@QueryHandler(GetPokemonsQuery)
export class GetPokemonsHandler implements IQueryHandler<GetPokemonsQuery> {
  constructor(private readonly pokemonApiService: PokemonApiService) {}

  async execute(query: GetPokemonsQuery): Promise<any> {
    const { pokemonId, limit, page, offset } = query;

    console.log({ query });

    // get one pokemon
    if (pokemonId) {
      const res = this.pokemonApiService.getPokemon(query);
      return await res;
    }

    // get list of pokemons
    const res = this.pokemonApiService.getPokemonList(query);
    return await res;
  }
}
