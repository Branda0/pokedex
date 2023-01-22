import { Transform } from 'class-transformer';
import { IsInt, IsOptional, IsString } from 'class-validator';

export class GetPokemonsDto {
  @IsInt()
  @Transform(({ value }) => Number(value))
  @IsOptional()
  limit: number;

  @IsInt()
  @Transform(({ value }) => Number(value))
  @IsOptional()
  page: number;

  @IsInt()
  @Transform(({ value }) => Number(value))
  @IsOptional()
  pokemonId: number;

  @IsString()
  @IsOptional()
  pokemonName: string;
}
