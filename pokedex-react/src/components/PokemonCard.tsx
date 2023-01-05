import { IPokemon } from "../types/pokemon";
import TypeCard from "./TypeCard";

const PokemonCard = ({ pokemon }: { pokemon: IPokemon }) => {
  return (
    <div className={`flex flex-col p-4 shadow-md rounded-lg bg-${pokemon.types[0]}Light `}>
      <img
        src={pokemon.image}
        className=" self-center w-[70%] -translate-y-14 -mb-14 object-contain "
        alt="Pokedex Title logo"
      />

      <p className=" text-sm text-gray-700 font-semibold ">{`#${String(pokemon.id).padStart(3, "0")}`}</p>
      <span className=" mb-2 capitalize text-4xl text-white font-semibold ">{pokemon.name}</span>

      <div className="flex flex-row gap-2">
        {pokemon.types.map((type: string) => (
          <TypeCard key={pokemon.id + type} type={type} />
        ))}
      </div>
    </div>
  );
};

export default PokemonCard;
