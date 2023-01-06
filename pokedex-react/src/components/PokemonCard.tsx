import { Link } from "react-router-dom";
import { IPokemon } from "../types/pokemon";
import TypeCard from "./TypeCard";

const PokemonCard = ({ pokemon }: { pokemon: IPokemon }) => {
  return (
    <Link
      className={`flex flex-col justify-between border-2 border-gray-700 p-4 rounded-lg bg-${pokemon.types[0]}Light duration-300 cursor-pointer hover:scale-[1.02] hover:shadow-md md:p-2 lg:p-4  `}
      to={`/pokemon/${pokemon.id}`}
      state={{ pokemonFromCard: pokemon }}
    >
      <img
        src={pokemon.image}
        className=" self-center w-[70%] -translate-y-14 -mb-14 object-contain "
        alt="Pokemon"
      />

      <div className="flex flex-col  ">
        <p className=" text-sm text-gray-700 font-semibold ">{`#${String(pokemon.id).padStart(3, "0")}`}</p>
        <span className=" mb-4 capitalize text-4xl text-white font-semibold sm:text-3xl lg:text-4xl ">
          {pokemon.name}
        </span>

        <div className="flex flex-row gap-2">
          {pokemon.types.map((type: string) => (
            <TypeCard key={pokemon.id + type} type={type} />
          ))}
        </div>
      </div>
    </Link>
  );
};

export default PokemonCard;
