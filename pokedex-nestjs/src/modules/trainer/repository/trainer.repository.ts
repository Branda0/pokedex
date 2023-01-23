import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { TrainerMapper } from '../trainer.mapper';
import { Trainer } from '@prisma/client';
import { TrainerEntity } from '../domain/trainer.entity';

@Injectable()
export class TrainerRepository {
  constructor(
    private prisma: PrismaService,
    private readonly mapper: TrainerMapper,
  ) {}

  async findOneById(id: string): Promise<TrainerEntity | null> {
    const trainerRecord = await this.prisma.trainer.findUnique({
      where: {
        id: id,
      },
    });

    return trainerRecord ? this.mapper.toDomain(trainerRecord) : null;
  }

  async findOneByEmail(email: string): Promise<TrainerEntity | null> {
    const trainerRecord = await this.prisma.trainer.findUnique({
      where: {
        email: email,
      },
    });

    return trainerRecord ? this.mapper.toDomain(trainerRecord) : null;
  }

  async insert(
    trainerEntity: TrainerEntity,
    hashPassword: string,
  ): Promise<TrainerEntity> {
    const trainerRecord = await this.prisma.trainer.create({
      data: this.mapper.toPersistence(trainerEntity, hashPassword),
    });

    console.log('Trainer added to DB', trainerRecord);

    return this.mapper.toDomain(trainerRecord);
  }

  async addPokemon(
    trainerId: string,
    pokemonId: number,
  ): Promise<TrainerEntity> {
    const updatedRecord = await this.prisma.trainer.update({
      data: {
        catchedPokemons: {
          push: pokemonId,
        },
      },
      where: { id: trainerId },
    });

    return this.mapper.toDomain(updatedRecord);
  }
}
