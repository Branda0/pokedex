// pokemon.controller.ts
import { Controller, Get, Param } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { GetPokemonsQuery } from './queries/get-pokemons/get-pokemons.query';

@Controller('pokemons')
export class PokemonController {
  constructor(private readonly queryBus: QueryBus) {}

  @Get()
  async getPokemons() {
    return this.queryBus.execute(new GetPokemonsQuery());
  }

  @Get(':id')
  async getPokemonById(@Param('id') id: string) {
    return this.queryBus.execute(new GetPokemonsQuery(id));
  }
}
