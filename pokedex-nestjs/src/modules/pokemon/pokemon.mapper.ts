import { Injectable } from '@nestjs/common';
import { Pokemon } from '@prisma/client';
import { PokemonEntity } from './domain/pokemon.entity';
import { Pokemon as PokemonApi } from './types/pokemon.types';

@Injectable()
export class PokemonMapper {
  toPersistence(entity: PokemonEntity): Pokemon {
    const copy = entity.getPropsCopy();

    return {
      id: copy.pokemonIdentity.getPokedexId(),
      createdAt: copy.createdAt,
      name: copy.pokemonIdentity.getPokemonName(),
      image: copy.image,
      types: copy.types,
    };
  }

  toDomain(record: Pokemon): PokemonEntity {
    const entity = new PokemonEntity({
      id: record.id,
      name: record.name,
      date: record.createdAt,
      image: record.image,
      types: record.types,
    });

    return entity;
  }

  fromApiToDomain(apiPokemon: PokemonApi, date: Date): PokemonEntity {
    const entity = new PokemonEntity({
      id: apiPokemon.id,
      name: apiPokemon.name,
      date: date,
      image: apiPokemon.image,
      types: apiPokemon.types,
    });

    return entity;
  }
}
