import { ICommandHandler, CommandHandler } from '@nestjs/cqrs';
import { Result } from 'src/shared/result.type';
import { TrainerEntity } from 'src/modules/trainer/domain/trainer.entity';
import { TrainerRepository } from 'src/modules/trainer/domain/trainer.repository';
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
    const trainerEntity = TrainerEntity.create(command);
    console.log('created trainer :', trainerEntity);

    const trainerRecord = await this.repository.findOneByEmail(command.email);

    if (trainerRecord)
      return { status: 'err', data: 'Trainer credentials already exists' };

    const newTrainer = await this.repository.insert(
      trainerEntity,
      command.hashPassword,
    );

    return { status: 'ok', data: { id: newTrainer.id } };
  }
}
