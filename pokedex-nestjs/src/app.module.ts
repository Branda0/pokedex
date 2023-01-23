import { Module } from '@nestjs/common';
import { PokemonModule } from './modules/pokemon/pokemon.module';
import { PrismaModule } from './modules/prisma/prisma.module';
import { TrainerModule } from './modules/trainer/trainer.module';

@Module({
  imports: [PokemonModule, PrismaModule, TrainerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
