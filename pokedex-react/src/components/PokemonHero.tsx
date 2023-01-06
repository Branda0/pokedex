// import { useQuery } from "react-query";
// import { fetchPokemon } from "../fetchs/fetch-pokemon";
import { IPokemon } from "../types/pokemon";
import { TypeCard } from "../components";

const PokemonHero = ({ pokemon }: { pokemon: IPokemon }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-w-5xl px-4 m-auto justify-center items-center sm:flex-row sm:items-end sm:justify-around">
      <div className="flex flex-col pt-10 pb-5 md:pb-10 ">
        <p className=" text-sm text-gray-700 font-semibold md:text-lg ">
          {`#${String(pokemon.id).padStart(3, "0")}`}
        </p>
        <span className=" mb-4 capitalize text-4xl text-white font-semibold sm:text-5xl md:text-7xl ">
          {pokemon.name}
        </span>
        <div className="flex flex-row gap-2">
          {pokemon.types.map((type: string) => (
            <TypeCard key={pokemon.id + type} type={type} />
          ))}
        </div>
      </div>
      <img
        src={pokemon.image}
        className=" w-64  min-w-[10rem] -mb-8  sm:-mb-10  object-contain "
        alt="Pokemon"
      />
    </div>

    // </div>
  );
};

export default PokemonHero;
