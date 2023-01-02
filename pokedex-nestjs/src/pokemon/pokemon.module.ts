import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { PokemonController } from './pokemon.controller';
import { GetPokemonsHandler } from './queries/get-pokemons/get-pokemons.handler';

// import { GetPokemonsService } from './queries/get-pokemons/get-pokemons.service';

@Module({
  imports: [CqrsModule],
  controllers: [PokemonController],
  providers: [GetPokemonsHandler],
})
export class PokemonModule {}
