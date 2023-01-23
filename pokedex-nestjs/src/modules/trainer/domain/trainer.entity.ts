import { ConflictException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

export interface CreateTrainerProps {
  userName: string;
  email: string;
}

export class TrainerEntity {
  private id: string;
  private email: string;
  private userName: string;
  private catchedPokemons: number[];
  private createdAt: Date;

  constructor(
    id: string,
    date: Date,
    catchedPokemons: number[],
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

  public getPropsCopy() {
    const copy = {
      id: this.id,
      createdAt: this.createdAt,
      email: this.email,
      userName: this.userName,
      catchedPokemons: this.catchedPokemons,
    };

    return copy;
  }

  public getId() {
    return this.id;
  }

  public getPokemons() {
    return this.catchedPokemons;
  }

  catchPokemon(pokemonId: number): void {
    if (this.catchedPokemons.includes(pokemonId))
      throw new ConflictException('Trainer has already catched this Pokemon');

    if (pokemonId < 1 || pokemonId > Number(process.env.MAX_POKEMON)) {
      throw new ConflictException(
        'This Pokemon id is not referenced on pokedex',
      );
    }
  }

  releasePokemon(pokemonId: number): void {
    if (!this.catchedPokemons.includes(pokemonId))
      throw new ConflictException("Trainer can't release uncatched Pokemons");

    if (pokemonId < 1 || pokemonId > Number(process.env.MAX_POKEMON)) {
      throw new ConflictException(
        'This Pokemon id is not referenced on pokedex',
      );
    }
  }
}
