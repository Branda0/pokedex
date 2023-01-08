import { IPokemonDetails, IPokemon } from "../types/pokemon";

type Stat = {
  name: string;
  value: string | number | Array<string>;
};

interface StatsRowProps {
  stats: Array<Stat>;
}

export default StatsRowProps;
