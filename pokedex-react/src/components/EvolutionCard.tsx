import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { EvolutionCardProps } from "../props";
import { fetchPokemon } from "../fetchs/fetch-pokemon";
import { IPokemon } from "../types/pokemon";
import pokeballImg from "../assets/img/pokeball.png";

const EvolutionCard = ({ pokemon }: EvolutionCardProps) => {
  const queryKey = [`pokemon-${pokemon.id}`];
  const { isLoading, isError, data } = useQuery(queryKey, () => fetchPokemon(pokemon.id.toString()), {
    staleTime: 60000,
  });

  const pokemonData = data as IPokemon;

  return (
    <div className="flex flex-col justify-center items-center">
      <Link
        className={`h-28 w-28 md:h-32 md:w-32  xl:w-36 xl:h-36 flex justify-center content-center bg-gray-100 border-4 transition-all duration-200 rounded-[50%] hover:rounded-[40%] ${
          isError || isLoading ? "border-gray-800" : `border-${pokemonData.types[0]}Dark`
        }`}
        to={`/pokemon/${pokemon.id}`}
      >
        {isError || isLoading ? (
          <img
            src={pokeballImg}
            className=" w-[30%] self-center object-contain group-hover:scale-110 duration-200"
            alt="missing data"
          />
        ) : (
          <img
            src={pokemonData.image}
            className=" w-[60%] self-center object-contain group-hover:scale-110 duration-200"
            alt="Pokemon evolution"
          />
        )}
      </Link>

      <div
        className={`flex justify-center mt-4 content-center py-1 px-3 rounded-full text-sm md:text-base ${
          isError || isLoading ? "bg-gray-500" : `bg-${pokemonData.types[0]}Dark`
        }`}
      >
        <span className=" text-white capitalize md:text-sm ">{pokemon.name}</span>
        <span className=" self-center text-gray-800 capitalize ml-2 text-sm ">{`#${pokemon.id.padStart(
          3,
          "0"
        )}`}</span>
      </div>
    </div>
  );
};

export default EvolutionCard;
