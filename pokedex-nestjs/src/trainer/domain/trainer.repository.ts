import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { TrainerMapper } from '../trainer.mapper';
import { TrainerEntity } from './trainer.entity';

@Injectable()
export class TrainerRepository {
  constructor(
    private prisma: PrismaService,
    private readonly mapper: TrainerMapper,
  ) {}

  async findOneByEmail(email: string) {
    const trainerRecord = await this.prisma.trainer.findFirst({
      where: {
        email: email,
      },
    });
    console.log(trainerRecord);

    return trainerRecord ? this.mapper.toDomain(trainerRecord) : null;
  }

  async insert(trainerEntity: TrainerEntity, hashPassword: string) {
    const record = await this.prisma.trainer.create({
      data: this.mapper.toPersistence(trainerEntity, hashPassword),
    });

    return record;
  }
}
