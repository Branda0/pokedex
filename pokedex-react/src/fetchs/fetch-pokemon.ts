import axios from "axios";
import { IPokemon, IPokemonList, IPokemonDetails } from "../types/pokemon";

function isInt(str: string) {
  return /^\d+$/.test(str);
}

export const fetchPokemons = async (page: number, searchValue: string): Promise<IPokemonList> => {
  const isId = isInt(searchValue);

  const response = await axios.get(`${import.meta.env.VITE_HOST}${import.meta.env.VITE_PORT}/pokemon`, {
    params: {
      page,
      pokemonName: isId ? null : searchValue,
      pokemonId: isId ? searchValue : null,
    },
  });
  const pokemons = response.data;

  console.log("fetching pokemons =", pokemons);
  return pokemons;
};

export const fetchPokemon = async (id: string): Promise<IPokemon> => {
  const response = await axios.get(`${import.meta.env.VITE_HOST}${import.meta.env.VITE_PORT}/pokemon/${id}`);
  const pokemon = response.data;

  console.log("fetching pokemon =", pokemon);
  return pokemon;
};

export const fetchPokemonDetails = async (id: string): Promise<IPokemonDetails> => {
  const response = await axios.get(`${import.meta.env.VITE_HOST}${import.meta.env.VITE_PORT}/details/${id}`);
  const details = response.data;

  console.log("fetching pokemon details =", details);
  return details;
};
