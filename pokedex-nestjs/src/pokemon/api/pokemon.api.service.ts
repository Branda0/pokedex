import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { GetPokemonsQuery } from '../queries/get-pokemons/get-pokemons.query';
import {
  Pokemon,
  PokemonApiItem,
  PokemonResultList,
  PokemonResultItem,
} from '../types/pokemon.types';

@Injectable()
export class PokemonApiService {
  // Return one pokemon given its ID
  async getPokemon(pokemonId: number): Promise<Pokemon> {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonId}`,
      );
      const pokemonData = response.data;

      return {
        name: pokemonData?.name,
        id: pokemonData?.id,
        height: pokemonData?.height,
        weight: pokemonData?.weight,
        image: pokemonData?.sprites?.other?.['official-artwork']?.front_default,
        types: pokemonData?.types.map((typeSlot) => typeSlot.type.name),
      };
    } catch (error) {
      if (error.response.statusText === 'Not Found') {
      }
      throw new Error(
        `Error fetching Pokemon with id ${pokemonId}: ${error.message}`,
      );
    }
  }

  // Return a list of pokemon api items using pagination
  async getPokemonList(props: GetPokemonsQuery): Promise<PokemonResultList> {
    const MAX_POKEMON = 905;

    // query response for search by id or name, we return filtered pokemons with pagination
    if (props.pokemonId || props.pokemonName) {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=${MAX_POKEMON}`,
      );
      const allPokemonList: PokemonApiItem[] = await response.data?.results;

      let filteredSearch: PokemonResultItem[];

      // filtered by exact id
      if (props.pokemonId) {
        filteredSearch = allPokemonList.reduce(
          (arr: PokemonResultItem[], pokemon) => {
            const urlId = pokemon.url.match(/(?<=\/)\d+(?=\/)/g)[0];
            if (Number(urlId) === props.pokemonId)
              arr.push({ name: pokemon.name, id: Number(urlId) });
            return arr;
          },
          [],
        );
      }

      // filtered by name
      else {
        filteredSearch = allPokemonList.reduce(
          (arr: PokemonResultItem[], pokemon: PokemonApiItem) => {
            const urlId = pokemon.url.match(/(?<=\/)\d+(?=\/)/g)[0];
            if (pokemon.name.includes(props.pokemonName))
              arr.push({ name: pokemon.name, id: Number(urlId) });
            return arr;
          },
          [],
        );
      }

      return {
        count: filteredSearch.length,
        result: filteredSearch.slice(props.offset, props.offset + props.limit),
      };
    }

    // no search id or name given, we return all pokemon with pagination
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=${props.limit}&offset=${props.offset}`,
    );

    return {
      count: MAX_POKEMON,
      result: response.data?.results.map((pokemon: PokemonApiItem) => {
        const urlId = pokemon.url.match(/(?<=\/)\d+(?=\/)/g)[0];
        return { name: pokemon.name, id: Number(urlId) };
      }),
    };
  }
}
