import { Link } from "react-router-dom";
import { useState } from "react";
import { useQuery } from "react-query";
import { fetchPokemons } from "../fetchs/pokemon";
import { PokemonCard } from "../components";
import { bug, fire } from "../assets/svg/pokemon-types";
import { IPokemon, IPokemonList } from "../types/pokemon";

const Pokedex = () => {
  const [page, setPage] = useState(1);

  const queryKey = [`pokemons${page}`];

  const handlePage = () => {
    setPage((prev) => prev + 1);
  };
  console.log("RENDER");
  const { isLoading, isError, data, error } = useQuery(queryKey, () => fetchPokemons(page), {
    staleTime: 60000,
  });

  const pokemonListData: IPokemonList = data;

  if (isLoading) {
    return (
      <div>
        <h1>LOADING ...</h1>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h1>{`error : ${error}`}</h1>
      </div>
    );
  }

  return (
    <div>
      <div>
        <span>SEARCH BAR</span>
      </div>
      <h1>{page}</h1>
      <h2>{`${pokemonListData.count}`}</h2>
      <button onClick={handlePage}> Page + </button>
      {/* <img src={bug} alt="bug" /> */}
      <div className="grid grid-cols-3 gap-12 p-2 mt-10 ">
        {pokemonListData.data.map((pokemon: IPokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
      <Link to={`/pokemon/3`}>CLICK</Link>
    </div>
  );
};

export default Pokedex;
