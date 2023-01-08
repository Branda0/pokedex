import axios from "axios";
import { IPokemon, IPokemonList, IPokemonDetails } from "../types/pokemon";

function isInt(str: string) {
  return /^\d+$/.test(str);
}

export const fetchPokemons = async (
  page: number,
  searchValue: string,
  limit: number
): Promise<IPokemonList> => {
  const isId = isInt(searchValue);

  const response = await axios.get(`${import.meta.env.VITE_POKEDEX_API}/pokemon`, {
    params: {
      page,
      pokemonName: isId ? null : searchValue,
      pokemonId: isId ? searchValue : null,
      limit,
    },
  });
  const pokemons = response.data;

  return pokemons;
};

export const fetchPokemon = async (id: string): Promise<IPokemon> => {
  const response = await axios.get(`${import.meta.env.VITE_POKEDEX_API}/pokemon/${id}`);
  const pokemon = response.data;

  return pokemon;
};

export const fetchPokemonDetails = async (id: string): Promise<IPokemonDetails> => {
  const response = await axios.get(`${import.meta.env.VITE_POKEDEX_API}/details/${id}`);
  const details = response.data;

  return details;
};
