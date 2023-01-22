import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CatchPokemonHandler } from './commands/catch-pokemon/catch-pokemon.handler';

import { CreateTrainerHandler } from './commands/create-trainer/create-trainer.handler';
import { TrainerRepository } from './domain/trainer.repository';
import { TrainerController } from './trainer.controller';
import { TrainerMapper } from './trainer.mapper';

@Module({
  imports: [CqrsModule],
  controllers: [TrainerController],
  providers: [
    CreateTrainerHandler,
    CatchPokemonHandler,
    TrainerMapper,
    TrainerRepository,
  ],
})
export class TrainerModule {}
