import axios from "axios";

export const fetchPokemons = async (page: number) => {
  const response = await axios.get(`${import.meta.env.VITE_HOST}${import.meta.env.VITE_PORT}/pokemon`, {
    params: { page },
  });
  const pokemons = response.data;

  console.log("fetching pokemon =", pokemons);
  return pokemons;
};
