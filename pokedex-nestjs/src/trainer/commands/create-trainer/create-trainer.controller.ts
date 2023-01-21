// pokemon.controller.ts
import { Controller, ConflictException, Post, Body } from '@nestjs/common';
import { hash } from 'argon2';
import { CommandBus } from '@nestjs/cqrs';
import {
  CreateTrainerHashedRequestDto,
  CreateTrainerRequestDto,
  CreateTrainerResponseDto,
} from './create-trainer.dtos';
import { CreateTrainerCommand } from './create-trainer.command';
import { Result } from 'src/shared/result.type';

@Controller('trainer')
export class CreateTrainerController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post('create')
  async createTrainer(
    @Body() dto: CreateTrainerRequestDto,
  ): Promise<CreateTrainerResponseDto> {
    const command: CreateTrainerHashedRequestDto = {
      email: dto.email,
      userName: dto.userName,
      hash: await hash(dto.password),
    };

    const result: Result<CreateTrainerResponseDto, string> =
      await this.commandBus.execute(new CreateTrainerCommand(command));

    if (result.status === 'err') throw new ConflictException(result.data);

    return result.data;
  }
}
