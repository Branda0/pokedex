// pokemon.controller.ts
import {
  Controller,
  HttpException,
  HttpStatus,
  Post,
  Body,
} from '@nestjs/common';
import { hash } from 'argon2';
import { CommandBus } from '@nestjs/cqrs';
import {
  CreateTrainerHashedRequestDto,
  CreateTrainerRequestDto,
} from './create-trainer.dtos';
import { CreateTrainerResponseDto } from './create-trainer.response.dto';
import { CreateTrainerCommand } from './create-trainer.command';

@Controller('trainer')
export class CreateTrainerController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post('create')
  async createTrainer(
    @Body() dto: CreateTrainerRequestDto,
  ): Promise<CreateTrainerResponseDto> {
    try {
      const command: CreateTrainerHashedRequestDto = {
        email: dto.email,
        userName: dto.userName,
        hash: await hash(dto.password),
      };
      return this.commandBus.execute(new CreateTrainerCommand(command));
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
}
