import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { GetPokemonsQuery } from '../queries/get-pokemons/get-pokemons.query';
import { Pokemon } from '../models/pokemon.model';

// interface getPokemonListProps {
//   limit?: number;
// }

@Injectable()
export class PokemonApiService {
  async getPokemonList(props: GetPokemonsQuery): Promise<string[]> {
    console.log('in pokemonList');

    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=${props.limit}&offset=${props.offset}`,
    );
    return response.data;
  }

  async getPokemon(props: GetPokemonsQuery): Promise<Pokemon> {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${props.pokemonId}`,
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
  }
}
