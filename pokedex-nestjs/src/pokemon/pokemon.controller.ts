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
import { Pokemon, PokemonDetails, PokemonList } from './types/pokemon.types';
import { GetPokemonDetailsQuery } from './queries/get-pokemon-details/get-pokemon-details.query';

@Controller()
export class PokemonController {
  constructor(private readonly queryBus: QueryBus) {}

  @Get('pokemon')
  async getPokemons(@Query() dto: GetPokemonsDto): Promise<PokemonList> {
    try {
      return this.queryBus.execute(new GetPokemonsQuery(dto));
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }

  @Get('pokemon/:id')
  async getPokemonById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Pokemon> {
    try {
      return await this.queryBus.execute(new GetPokemonQuery(id));
    } catch (error) {
      if (error.message === '400')
        throw new HttpException('Invalid pokemon ID', HttpStatus.BAD_REQUEST);
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }

  @Get('details/:id')
  async getPokemonDetailsById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<PokemonDetails> {
    try {
      return await this.queryBus.execute(new GetPokemonDetailsQuery(id));
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
}
