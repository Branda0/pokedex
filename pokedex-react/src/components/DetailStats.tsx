import { IPokemon, IPokemonDetails } from "../types/pokemon";

const DetailsStats = ({
  pokemon,
  pokemonDetails,
}: {
  pokemon: IPokemon;
  pokemonDetails: IPokemonDetails;
}) => {
  return (
    <div className="flex flex-col text-sm">
      <div className="flex gap-10 py-4 border-b-2 border-gray-200">
        <div className="flex flex-row items-center  ">
          <span className="flex w-20 capitalize text-gray-500">height</span>
          <span className="capitalize">{pokemon.height}</span>
        </div>
        <div className="flex flex-row items-center ">
          <span className="flex w-20  capitalize text-gray-500">weight</span>
          <span className={`capitalize decoration-${pokemon.types[0]}Dark`}>{pokemon.weight}</span>
        </div>
      </div>
      {pokemon?.abilities.length ? (
        <div className="flex py-1 border-b-2 border-gray-200">
          <div className="flex flex-row items-center  ">
            <span className="flex w-20 capitalize text-gray-500">abilities</span>
            <div className="flex flex-wrap">
              {pokemon?.abilities.map((ability, index) => (
                <span key={index} className="capitalize leading-10 line mr-4">
                  {ability}
                </span>
              ))}
            </div>
          </div>
        </div>
      ) : null}
      {pokemonDetails?.habitat ? (
        <div className="flex gap-10 py-4 border-b-2 border-gray-200">
          <div className="flex flex-row items-center  ">
            <span className="flex w-20 capitalize text-gray-500">habitat</span>
            <span className="capitalize">{pokemonDetails.habitat}</span>
          </div>
        </div>
      ) : null}
      <div className="flex gap-10 py-4 border-b-2 border-gray-200">
        <div className="flex flex-row items-center  ">
          <span className="flex w-20 capitalize text-gray-500">shape</span>
          <span className="capitalize">{pokemonDetails.shape}</span>
        </div>
      </div>
    </div>
  );
};

export default DetailsStats;
