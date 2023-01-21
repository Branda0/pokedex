import { Module } from '@nestjs/common';
import { PokemonModule } from './pokemon/pokemon.module';
import { PrismaModule } from './prisma/prisma.module';
import { TrainerModule } from './trainer/trainer.module';

@Module({
  imports: [PokemonModule, PrismaModule, TrainerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
