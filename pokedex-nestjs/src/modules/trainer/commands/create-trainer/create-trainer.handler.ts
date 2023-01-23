import { ICommandHandler, CommandHandler } from '@nestjs/cqrs';
import { Result } from 'src/lib/result.type';
import { TrainerEntity } from 'src/modules/trainer/domain/trainer.entity';
import { TrainerRepository } from 'src/modules/trainer/repository/trainer.repository';
import { TrainerMapper } from '../../trainer.mapper';
import { CreateTrainerCommand } from './create-trainer.command';
import { CreateTrainerResponseDto } from './create-trainer.dtos';

@CommandHandler(CreateTrainerCommand)
export class CreateTrainerHandler
  implements ICommandHandler<CreateTrainerCommand>
{
  constructor(private readonly repository: TrainerRepository) {}

  async execute(
    command: CreateTrainerCommand,
  ): Promise<Result<CreateTrainerResponseDto, string>> {
    const trainer = TrainerEntity.create(command);

    const trainerEntity = await this.repository.findOneByEmail(command.email);

    if (trainerEntity)
      return { status: 'err', data: 'Trainer credentials already exists' };

    const newTrainer = await this.repository.insert(
      trainer,
      command.hashPassword,
    );

    return { status: 'ok', data: { id: newTrainer.getId() } };
  }
}
