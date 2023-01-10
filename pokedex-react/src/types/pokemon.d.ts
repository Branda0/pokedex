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
  data: IPokemon[];
}

export interface IPokemonDetails {
  description: string;
  habitat: string;
  shape: string;
  evolutions: Array<IEvolutionItem | IEvolutionItem[]>; // need todefine evolution format
}

export interface IEvolutionItem {
  name: string;
  id: string;
}
