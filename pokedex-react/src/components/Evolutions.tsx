import { useQuery } from "react-query";
import { EvolutionsProps } from "../props";
import { IPokemonDetails, IEvolutionItem } from "../types/pokemon";
import { fetchPokemonDetails } from "../fetchs/fetch-pokemon";
import { EvolutionCard } from "../components";
import arrowIcon from "../assets/svg/icon/arrow.svg";
import React from "react";

const Evolutions = ({ pokemon }: EvolutionsProps) => {
  // fetch or access detail of the Pokemon
  const queryKey = [`details-${pokemon.id}`];
  const { isSuccess, data: pokemonDetails } = useQuery(queryKey, () => fetchPokemonDetails(pokemon.id), {
    staleTime: 60000,
  });

  // isLoading and isError is already beeing processed by another component, no need to return some visual info from there
  if (!isSuccess) {
    return null;
  }

  return (
    <div className="flex flex-grow flex-col w-full max-w-5xl px-4 pb-4 sm:px-16 m-auto ">
      <p
        className={`block  w-full py-2  my-4 text-3xl max-w-4xl m-auto border-b-2 font-semibold text-${pokemon.types[0]}Dark border-${pokemon.types[0]}Dark `}
      >
        Evolutions
      </p>
      {pokemonDetails.evolutions.length < 2 && (
        <p
          className={`w-full max-w-4xl m-auto align-middle font-semibold text-${pokemon.types[0]}Dark text-base`}
        >
          This Pokemon does not evolve
        </p>
      )}

      <div className="flex flex-col justify-center items-center py-8 gap-3 sm:gap-4 sm:flex-row">
        {pokemonDetails.evolutions.map((evolution, index) => {
          if (evolution instanceof Array) {
            return (
              <div key={index} className="flex justify-center items-center flex-wrap flex-shrink gap-6">
                {evolution.map((subEvolution, index2) => {
                  return <EvolutionCard key={index + 10 * index2} pokemon={subEvolution} />;
                })}
              </div>
            );
          } else {
            return (
              <React.Fragment key={index}>
                <EvolutionCard pokemon={evolution} />
                {index + 1 < pokemonDetails.evolutions.length ? (
                  <img
                    src={arrowIcon}
                    className="w-12 rotate-90 sm:ml-4 sm:rotate-0 sm:pb-12"
                    alt="separator arrow"
                  />
                ) : null}
              </React.Fragment>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Evolutions;
