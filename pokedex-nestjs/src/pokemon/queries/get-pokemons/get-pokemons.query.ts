import { GetPokemonsDto } from 'src/pokemon/dto/getPokemons.dto';

export class GetPokemonsQuery {
  limit: number;
  offset: number;
  page: number;
  pokemonId: number;
  pokemonName: string;

  constructor(props: GetPokemonsDto) {
    this.limit = props?.limit || 9;
    this.pokemonId = props.pokemonId || null;
    this.pokemonName = props.pokemonName || null;
    this.page = props.page || 1;
    this.offset = props.page ? (props.page - 1) * this.limit : 0;
  }
}
