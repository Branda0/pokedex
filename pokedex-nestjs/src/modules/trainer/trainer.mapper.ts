import { Injectable } from '@nestjs/common';
import { Trainer as TrainerModel } from '@prisma/client';
import { TrainerEntity } from './domain/trainer.entity';

@Injectable()
export class TrainerMapper {
  toPersistence(trainer: TrainerEntity, hashPassword: string): TrainerModel {
    const copy = trainer.getPropsCopy();

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
    const entity = new TrainerEntity(
      record.id,
      record.createdAt,
      record.catchedPokemons,
      {
        email: record.email,
        userName: record.userName,
      },
    );
    return entity;
  }
}
