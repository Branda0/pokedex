import { Injectable } from '@nestjs/common';
import { instanceToPlain, plainToInstance } from 'class-transformer';

import { Trainer as TrainerModel } from '@prisma/client';
import { TrainerEntity } from './domain/trainer.entity';
import { PokemonIdentity } from 'src/shared/pokemonIdentity.value-object';

@Injectable()
export class TrainerMapper {
  toPersistence(trainer: TrainerEntity, hashPassword: string): TrainerModel {
    // const copy = trainer.getPropsCopy();
    const copy = instanceToPlain(trainer);
    return {
      id: copy.id,
      createdAt: copy.createdAt,
      email: copy.email,
      userName: copy.userName,
      hash: hashPassword,
      catchedPokemons: copy.catchedPokemons,
    };
  }

  toDomain(record: TrainerModel): TrainerEntity {
    const catchedPokemons = plainToInstance(
      PokemonIdentity,
      record.catchedPokemons,
    );
    const entity = new TrainerEntity(
      record.id,
      record.createdAt,
      catchedPokemons,
      {
        email: record.email,
        userName: record.userName,
      },
    );
    return entity;
  }
}
