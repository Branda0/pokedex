export class PokemonIdentity {
  private readonly pokedexId: number;
  private readonly name: string;

  constructor(pokedexId: number, name: string) {
    this.name = this.setValidName(name);
    this.pokedexId = this.setValidPokedexId(pokedexId);
  }

  private setValidName(name: string): string {
    if (name === '' || name === undefined) {
      throw new Error("Pokemon name can't be empty");
    }
    return name;
  }

  private setValidPokedexId(id: number): number {
    if (id < 1 || id === undefined) {
      throw new Error('Invalid Pokemon pokedexId ');
    }
    return id;
  }

  getPokedexId(): number {
    return this.pokedexId;
  }

  getPokemonName(): string {
    return this.name;
  }
}
