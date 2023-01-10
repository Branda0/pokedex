import { DetailStatsProps } from "../props";
import StatsRow from "./StatsRow";

const DetailsStats = ({ pokemon, pokemonDetails }: DetailStatsProps) => {
  return (
    <div className="flex flex-col text-sm">
      {pokemon.height && pokemon.weight ? (
        <StatsRow
          stats={[
            { name: "height", value: pokemon.height },
            { name: "weight", value: pokemon.weight },
          ]}
        />
      ) : null}
      {pokemon.abilities.length ? (
        <StatsRow stats={[{ name: "abilities", value: pokemon.abilities }]} />
      ) : null}
      {pokemonDetails.habitat ? (
        <StatsRow stats={[{ name: "habitat", value: pokemonDetails.habitat }]} />
      ) : null}
      <StatsRow stats={[{ name: "shape", value: pokemonDetails.shape }]} />
    </div>
  );
};

export default DetailsStats;
