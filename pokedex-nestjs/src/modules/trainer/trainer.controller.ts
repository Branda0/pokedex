// pokemon.controller.ts
import {
  Controller,
  ConflictException,
  Post,
  Param,
  Body,
} from '@nestjs/common';
import { hash } from 'argon2';
import { CommandBus } from '@nestjs/cqrs';
import { Result } from 'src/lib/result.type';

import {
  CreateTrainerRequestDto,
  CreateTrainerResponseDto,
} from './commands/create-trainer/create-trainer.dtos';
import { CreateTrainerCommand } from './commands/create-trainer/create-trainer.command';

import {
  CatchPokemonRequestDto,
  CatchPokemonResponseDto,
} from './commands/catch-pokemon/catch-pokemon.dtos';
import { CatchPokemonCommand } from './commands/catch-pokemon/catch-pokemon.command';

@Controller('trainer')
export class TrainerController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post('create')
  async createTrainer(
    @Body() dto: CreateTrainerRequestDto,
  ): Promise<CreateTrainerResponseDto> {
    const command = new CreateTrainerCommand({
      email: dto.email,
      userName: dto.userName,
      hashPassword: await hash(dto.password),
    });

    const result: Result<CreateTrainerResponseDto, string> =
      await this.commandBus.execute(command);

    if (result.status === 'err') throw new ConflictException(result.data);

    return result.data;
  }

  @Post(':id/catchPokemon')
  async catchPokemon(
    @Param('id') trainerId: string,
    @Body() dto: CatchPokemonRequestDto,
  ): Promise<CatchPokemonResponseDto> {
    const command = new CatchPokemonCommand(trainerId, dto.pokemonId);

    const result: Result<CatchPokemonResponseDto, string> =
      await this.commandBus.execute(command);

    if (result.status === 'err') throw new ConflictException(result.data);

    return result.data;
  }
}
