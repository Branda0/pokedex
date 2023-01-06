export interface IPokemon {
  name: string;
  id: string;
  height: number;
  weight: number;
  image: string;
  types: string[];
  abilities: string[];
}

export interface IPokemonList {
  count: number;
  data: Pokemon[];
}

export interface IPokemonDetails {
  description: string;
  habitat: string;
  shape: string;
  evolutions: any[]; // need todefine evolution format
}
