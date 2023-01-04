// pokemon.controller.ts
import {
  Controller,
  HttpException,
  HttpStatus,
  Get,
  Param,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { GetPokemonsQuery } from './queries/get-pokemons/get-pokemons.query';
import { GetPokemonQuery } from './queries/get-pokemon/get-pokemon.query';
import { GetPokemonsDto } from './dto/getPokemons.dto';
import { Pokemon, PokemonList } from './types/pokemon.types';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly queryBus: QueryBus) {}

  @Get()
  async getPokemons(@Query() dto: GetPokemonsDto): Promise<PokemonList> {
    try {
      return this.queryBus.execute(new GetPokemonsQuery(dto));
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }

  @Get(':id')
  async getPokemonById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Pokemon> {
    try {
      return await this.queryBus.execute(new GetPokemonQuery(id));
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
}
