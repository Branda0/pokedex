import { useQuery } from "react-query";
import { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { PokemonHero, Loading, ProfessorOakMsg, PokemonDetails, Evolutions } from "../components";
import { fetchPokemon } from "../fetchs/fetch-pokemon";
import { IPokemon } from "../types/pokemon";

const Pokemon = () => {
  //Get pokemon id from url /:id
  const { id } = useParams<string>();

  //Set the window to top of the screen
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //Scroll smoothly when rendering and data is already fetched => when he navigate beetween evolutions and already visited a pokemon
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  });

  let pokemon!: IPokemon;
  let needFetching: boolean = true;

  //Get pokemon data from PokemonCard Link
  const location = useLocation();

  //using pokemon data from Link of previous fetched data
  if (location?.state) {
    const { pokemonFromCard } = location.state;
    pokemon = pokemonFromCard;
    needFetching = false;
  }

  //if no data is coming from Link we fetch it (case where route accessed is directly from url)
  const queryKey = [`pokemon-${id}`];
  const { isLoading, isError, data, error } = useQuery(queryKey, () => fetchPokemon(id as string), {
    staleTime: 60000,
    enabled: needFetching,
  });

  if (needFetching) pokemon = data as IPokemon;

  if (isLoading) {
    return <Loading />;
  }

  if (isError && error instanceof Error) {
    return (
      <>
        {error.message === "Request failed with status code 400" ? (
          <ProfessorOakMsg
            message={`Have you tweaked your Pokedex ? Their is some kind of error with your Pokemon ID data field ... `}
          />
        ) : (
          <ProfessorOakMsg
            message={`Hmmm it seems like we are having some trouble with the national pokedex database. Sorry for that, try again ... `}
          />
        )}{" "}
      </>
    );
  }

  return (
    <div className="flex flex-col flex-grow">
      <div className={`flex bg-${pokemon.types[0]}Light shadow-md`}>
        <PokemonHero pokemon={pokemon} />
      </div>
      <div className="flex flex-col w-full py-10 max-w-3xl px-6 sm:px-8 m-auto">
        <PokemonDetails pokemon={pokemon} />
      </div>
      <div className={`flex flex-auto flex-col bg-${pokemon.types[0]}Light shadow-md`}>
        <Evolutions pokemon={pokemon} />
      </div>
    </div>
  );
};

export default Pokemon;
