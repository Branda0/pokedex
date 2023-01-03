import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { PokemonController } from './pokemon.controller';
import { GetPokemonsHandler } from './queries/get-pokemons/get-pokemons.handler';
import { PokemonApiService } from './api/pokemon.api.service';

@Module({
  imports: [CqrsModule],
  controllers: [PokemonController],
  providers: [GetPokemonsHandler, PokemonApiService],
})
export class PokemonModule {}
