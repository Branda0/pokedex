// proprieties of Pokemon, as returned to client from pokemon/:id endpoint
export interface Pokemon {
  name: string;
  id: number;
  height: number;
  weight: number;
  image: string;
  types: string[];
}

//properties of PokemonList, as returned to client from /pokemon endpoint
export interface PokemonList {
  count: number;
  data: Pokemon[];
}

export interface PokemonDetails {
  description: string;
  color: string;
  evolutions: any[]; // need todefine evolution format
}

//proporties of pokemon list returned from pokemon api service getPokemonList
export interface PokemonResultList {
  count: number;
  result: PokemonResultItem[];
}

//proporties of pokemon item returned by the "pokeapi.co/api/v2/pokemon" endpoint
export interface PokemonApiItem {
  name: string;
  url: string;
}

//proporties of pokemon list item returned from pokemon api service getPokemonList
export interface PokemonResultItem {
  name: string;
  id: number;
}
