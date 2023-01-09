// proprieties of Pokemon, as returned to client from pokemon/:id endpoint
export interface Pokemon {
  name: string;
  id: number;
  height: number;
  weight: number;
  image: string;
  types: string[];
  abilities: string[];
}

//properties of PokemonList, as returned to client from /pokemon endpoint
export interface PokemonList {
  count: number;
  data: Pokemon[];
}

//properties of PokemonDetails, as returned to client from /details/:id endpoint
export interface PokemonDetails {
  description: string;
  habitat: string;
  shape: string;
  evolutions: Array<EvolutionItem | EvolutionItem[]>;
}

export interface EvolutionItem {
  name: string;
  id: number;
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
