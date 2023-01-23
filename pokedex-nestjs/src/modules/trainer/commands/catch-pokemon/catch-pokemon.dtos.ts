import { IsInt, Max, Min } from 'class-validator';
import { Transform } from 'class-transformer';

export class CatchPokemonRequestDto {
  @Max(1000)
  @Min(1)
  @IsInt()
  @Transform(({ value }) => Number(value))
  readonly pokemonId: number;
}

export class CatchPokemonResponseDto {
  readonly catchedPokemons: number[];
}
