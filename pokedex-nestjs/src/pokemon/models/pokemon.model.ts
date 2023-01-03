export class Pokemon {
  constructor(
    public readonly name: string,
    public readonly id: number,
    public readonly height: number,
    public readonly weight: number,
    public readonly image: string,
    public readonly types: string[],
  ) {}
}
