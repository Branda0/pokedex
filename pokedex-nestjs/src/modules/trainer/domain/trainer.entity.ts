import { v4 as uuid } from 'uuid';
import { PokemonIdentity } from 'src/shared/pokemonIdentity.value-object';

export interface CreateTrainerProps {
  userName: string;
  email: string;
}

export class TrainerEntity {
  private id: string;
  private email: string;
  private userName: string;
  private catchedPokemons: PokemonIdentity[];
  private createdAt: Date;

  constructor(
    id: string,
    date: Date,
    catchedPokemons: PokemonIdentity[],
    props: CreateTrainerProps,
  ) {
    this.id = id;
    this.email = props.email;
    this.userName = props.userName;
    this.createdAt = date;
    this.catchedPokemons = catchedPokemons;
  }

  static create(createProps: CreateTrainerProps) {
    const id = uuid();
    const date = new Date();
    const catchedPokemons = [];

    const trainer = new TrainerEntity(id, date, catchedPokemons, createProps);

    return trainer;
  }
  //   public getPropsCopy() {
  //     const copy = {
  //       id: this.id,
  //       createdAt: this.createdAt,
  //       email: this.email,
  //       userName: this.userName,
  //       catchedPokemons: this.catchedPokemons,
  //     };

  //     return copy;
  //   }

  catchPokemon(pokemonId: string): void {
    console.log('Pokemon catched');
  }

  releasePokemon(pokemonId: string): void {
    console.log('Pokemon catched');
  }
}
