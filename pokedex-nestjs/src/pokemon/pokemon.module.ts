import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { PokemonController } from './pokemon.controller';
import { GetPokemonsHandler } from './queries/get-pokemons/get-pokemons.handler';
import { GetPokemonHandler } from './queries/get-pokemon/get-pokemon.handler';
import { GetPokemonDetailsHandler } from './queries/get-pokemon-details/get-pokemon-details.handler';
import { PokemonApiService } from './api/pokemon.api.service';

@Module({
  imports: [CqrsModule],
  controllers: [PokemonController],
  providers: [
    GetPokemonsHandler,
    GetPokemonHandler,
    GetPokemonDetailsHandler,
    PokemonApiService,
  ],
})
export class PokemonModule {}
