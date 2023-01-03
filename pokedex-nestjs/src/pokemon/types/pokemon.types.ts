// All proprieties of Pokemon, as returned to client from pokemon/:id endpoint
export interface Pokemon {
  name: string;
  id: number;
  height: number;
  weight: number;
  image: string;
  types: string[];
  description: string;
  color: string;
}

//proporties of pokemon list item returned by the "pokeapi.co/api/v2/pokemon" endpoint
export interface PokemonApiItem {
  name: string;
  url: string;
}

//proporties returned to client from /pokemon endpoint
export interface PokemonDataList {
  count: number;
  data: Pokemon[];
}
