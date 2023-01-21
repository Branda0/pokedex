import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CreateTrainerController } from './commands/create-trainer/create-trainer.controller';
import { CreateTrainerHandler } from './commands/create-trainer/create-trainer.handler';
import { TrainerMapper } from './trainer.mapper';

@Module({
  imports: [CqrsModule],
  controllers: [CreateTrainerController],
  providers: [CreateTrainerHandler, TrainerMapper],
})
export class TrainerModule {}
