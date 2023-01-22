export class CatchPokemonCommand {
  constructor(
    public readonly trainerId: string,
    public readonly pokemonId: number,
  ) {}
}
