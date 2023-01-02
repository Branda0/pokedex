import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetPokemonsQuery } from './get-pokemons.query';

@QueryHandler(GetPokemonsQuery)
export class GetPokemonsHandler implements IQueryHandler<GetPokemonsQuery> {
  // constructor(private readonly test) {}

  async execute(query: GetPokemonsQuery): Promise<string> {
    const { pokemonId } = query;

    return `hello pika ${pokemonId}`;
  }
}
