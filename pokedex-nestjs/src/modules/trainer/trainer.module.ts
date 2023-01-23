import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { PokemonApiService } from '../pokemon/api/pokemon.api.service';
import { PokemonMapper } from '../pokemon/pokemon.mapper';
import { PokemonRepository } from '../pokemon/repository/pokemon.repository';
import { CatchPokemonHandler } from './commands/catch-pokemon/catch-pokemon.handler';

import { CreateTrainerHandler } from './commands/create-trainer/create-trainer.handler';
import { TrainerRepository } from './repository/trainer.repository';
import { TrainerController } from './trainer.controller';
import { TrainerMapper } from './trainer.mapper';

@Module({
  imports: [CqrsModule],
  controllers: [TrainerController],
  providers: [
    CreateTrainerHandler,
    CatchPokemonHandler,
    TrainerMapper,
    PokemonMapper,
    TrainerRepository,
    PokemonRepository,
    PokemonApiService,
  ],
})
export class TrainerModule {}
