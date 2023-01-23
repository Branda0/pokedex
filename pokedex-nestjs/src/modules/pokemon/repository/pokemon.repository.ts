import { Injectable } from '@nestjs/common';
import { Pokemon } from '@prisma/client';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { PokemonEntity } from '../domain/pokemon.entity';
import { PokemonMapper } from '../pokemon.mapper';

@Injectable()
export class PokemonRepository {
  constructor(
    private prisma: PrismaService,
    private readonly mapper: PokemonMapper,
  ) {}

  async findOneById(id: number): Promise<Pokemon | null> {
    const pokemonRecord: Pokemon = await this.prisma.pokemon.findUnique({
      where: {
        id: id,
      },
    });

    return pokemonRecord;
  }

  async insert(pokemonEntity: PokemonEntity): Promise<Pokemon> {
    const pokemonRecord = await this.prisma.pokemon.create({
      data: this.mapper.toPersistence(pokemonEntity),
    });

    return pokemonRecord;
  }
}
