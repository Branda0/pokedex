import { PokemonIdentity } from 'src/modules/pokemon/domain/pokemonIdentity.value-object';

export interface CreatePokemonProps {
  id: number;
  name: string;
  image: string;
  types: string[];
  date: Date;
}

export class PokemonEntity {
  private pokemonIdentity: PokemonIdentity;
  private createdAt: Date;
  private image: string;
  private types: string[];

  constructor(props: CreatePokemonProps) {
    this.pokemonIdentity = new PokemonIdentity(props.id, props.name);
    this.createdAt = props.date;
    this.image = props.image;
    this.types = props.types;
  }

  public getPropsCopy() {
    const copy = {
      pokemonIdentity: this.pokemonIdentity,
      createdAt: this.createdAt,
      image: this.image,
      types: this.types,
    };

    return copy;
  }
}
