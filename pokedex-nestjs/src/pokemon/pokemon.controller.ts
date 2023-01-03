// pokemon.controller.ts
import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { GetPokemonsQuery } from './queries/get-pokemons/get-pokemons.query';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly queryBus: QueryBus) {}

  @Get()
  async getPokemons(@Query() query: GetPokemonsQuery) {
    return this.queryBus.execute(new GetPokemonsQuery(query));
  }

  @Get(':id')
  async getPokemonById(@Param('id', ParseIntPipe) id: number) {
    return this.queryBus.execute(new GetPokemonsQuery({ pokemonId: id }));
    // return this.queryBus.execute(new GetPokemonsQuery(id));
  }
}
