import { useState } from "react";
import { useQuery } from "react-query";
import { IPokemon, IPokemonList } from "../types/pokemon";
import { PokemonCard, Pagination, Loading, ProfessorOakMsg } from "../components";
import { fetchPokemons } from "../fetchs/fetch-pokemon";

const FetchPokemons = ({
  searchValue,
  page,
  setPage,
}: {
  searchValue: string;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const POKEMONS_PER_PAGE = 9;

  const queryKey = [`pokemons-${page}-${searchValue}`];

  const { isLoading, isError, data, error } = useQuery(queryKey, () => fetchPokemons(page, searchValue), {
    staleTime: 60000,
  });

  const pokemonListData: IPokemonList = data as IPokemonList;

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    console.log(error);
    return (
      <ProfessorOakMsg
        message={`Hmmm it seems like we are having some trouble with the national pokedex database. Sorry for that, try again ... `}
      />
    );
  }

  if (pokemonListData.data.length === 0) {
    return (
      <ProfessorOakMsg
        message={"I'm afraid that this pokemon doesn't exist in the national pokedex database ..."}
      />
    );
  }

  return (
    <div className=" flex flex-col flex-1   ">
      <Pagination
        setPage={setPage}
        currentPage={page}
        totalPages={Math.ceil(pokemonListData.count / POKEMONS_PER_PAGE)}
      />
      <div className="grid grid-cols-1 gap-12 p-2 my-10 sm:grid-cols-2 md:grid-cols-3">
        {pokemonListData.data.map((pokemon: IPokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
      <Pagination
        setPage={setPage}
        currentPage={page}
        totalPages={Math.ceil(pokemonListData.count / POKEMONS_PER_PAGE)}
      />
    </div>
  );
};
export default FetchPokemons;
