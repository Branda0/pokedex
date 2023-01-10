import { useQuery } from "react-query";
import { IPokemonDetails } from "../types/pokemon";
import { PokemonDetailsProps } from "../props";
import { fetchPokemonDetails } from "../fetchs/fetch-pokemon";
import { Loading, ProfessorOakMsg, DetailsStats } from "../components";

const PokemonDetails = ({ pokemon }: PokemonDetailsProps) => {
  // fetch or access detail of the Pokemon
  const queryKey = [`details-${pokemon.id}`];
  const { isLoading, isError, data, error } = useQuery(queryKey, () => fetchPokemonDetails(pokemon.id), {
    staleTime: 60000,
  });

  const pokemonDetails = data as IPokemonDetails;

  if (isLoading) {
    return <Loading />;
  }

  if (isError && error instanceof Error) {
    return (
      <div>
        {error.message === "Request failed with status code 400" ? (
          <ProfessorOakMsg
            message={`Have you tweaked your Pokedex ? Their is some kind of error with your Pokemon ID data field ... `}
          />
        ) : (
          <ProfessorOakMsg
            message={`Hmmm it seems like we are having some trouble with the national pokedex database. Sorry for that, try again ... `}
          />
        )}{" "}
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <p className="max-w-lg text-center self-center italic  mb-8  text-sm sm:ml-6 sm:self-start sm:text-base ">{`"${pokemonDetails.description}"`}</p>
      <DetailsStats pokemon={pokemon} pokemonDetails={pokemonDetails} />
    </div>
  );
};

export default PokemonDetails;
