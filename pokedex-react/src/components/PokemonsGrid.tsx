import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import useDebounce from "../hooks/useDebounce";
import { IPokemon } from "../types/pokemon";
import { PokemonCard, Pagination, Loading, ProfessorOakMsg } from "../components";
import { fetchPokemons } from "../fetchs/fetch-pokemon";
import { PokemonsGridProps } from "../props";

const PokemonsGrid = ({ searchValue, page, setPage }: PokemonsGridProps) => {
  const MD_MEDIA_QUERIE = 768;
  const POKEMONS_PER_PAGE = window.innerWidth > MD_MEDIA_QUERIE ? 9 : 10;

  // state that will be updated by react query but will be used to display old data beetween fetches
  const [pokemonCount, setPokemonCount] = useState<number>(0);

  //fetch only if the search bar value as not changed the last 500ms
  const debouncedSearchValue = useDebounce(searchValue, 500);
  const queryKey = [`pokemons-${page}-${debouncedSearchValue}`];

  const {
    isLoading,
    isError,
    isSuccess,
    data: pokemonListData,
    error,
  } = useQuery(queryKey, () => fetchPokemons(page, debouncedSearchValue, POKEMONS_PER_PAGE), {
    staleTime: 60000,
  });

  useEffect(() => {
    if (!isLoading && pokemonListData && pokemonListData.count !== pokemonCount) {
      // Update the count if the data has changed
      setPokemonCount(pokemonListData.count);
    }
  }, [pokemonListData, pokemonCount, isLoading]);

  // const pokemonListData = data!;
  console.log({ pokemonListData });

  if (isError) {
    console.log(error);
    return (
      <ProfessorOakMsg
        message={`Hmmm it seems like we are having some trouble with the national pokedex database. Sorry for that, try again ... `}
      />
    );
  }

  if (isSuccess && pokemonListData.data.length === 0) {
    return (
      <ProfessorOakMsg
        message={"I'm afraid that this pokemon doesn't exist in the national pokedex database ..."}
      />
    );
  }

  return (
    <div className="flex flex-col flex-1 pb-24 pt-12 sm:pb-0  ">
      <Pagination
        setPage={setPage}
        currentPage={page}
        totalPages={Math.ceil(pokemonCount / POKEMONS_PER_PAGE)}
      />
      {isLoading ? (
        <Loading />
      ) : isSuccess ? (
        <div className="grid grid-cols-1 gap-12 p-2 my-10 sm:grid-cols-2 md:grid-cols-3">
          {pokemonListData.data.map((pokemon: IPokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      ) : null}
      <Pagination
        setPage={setPage}
        currentPage={page}
        totalPages={Math.ceil(pokemonCount / POKEMONS_PER_PAGE)}
      />
    </div>
  );
};

export default PokemonsGrid;
