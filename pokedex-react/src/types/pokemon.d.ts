export interface IPokemon {
  name: string;
  id: number;
  height: number;
  weight: number;
  image: string;
  types: string[];
}

export interface IPokemonList {
  count: number;
  data: Pokemon[];
}
