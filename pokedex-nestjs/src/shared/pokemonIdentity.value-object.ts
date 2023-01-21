export class PokemonIdentity {
  private readonly name: string;
  private readonly pokedexId: number;

  constructor(name: string, pokedexId: number) {
    this.name = this.getValidName(name);
    this.pokedexId = this.getValidPokedexId(pokedexId);
  }

  private getValidName(name: string): string {
    if (name === '' || name === undefined) {
      throw new Error("Pokemon name can't be empty");
    }
    return name;
  }

  private getValidPokedexId(id: number): number {
    if (id < 1 || id === undefined) {
      throw new Error('Invalid Pokemon pokedexId ');
    }
    return id;
  }
}
