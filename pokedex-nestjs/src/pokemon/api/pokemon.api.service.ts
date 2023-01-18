import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { GetPokemonsQuery } from '../queries/get-pokemons/get-pokemons.query';
import {
  Pokemon,
  PokemonApiItem,
  PokemonResultList,
  PokemonResultItem,
  PokemonDetails,
  EvolutionItem,
} from '../types/pokemon.types';

@Injectable()
export class PokemonApiService {
  // Returns one Pokemon given its ID
  async getPokemon(pokemonId: number): Promise<Pokemon> {
    try {
      const response = await axios.get(
        `${process.env.API_URL}/pokemon/${pokemonId}`,
      );
      const pokemonData = response.data;

      return {
        name: pokemonData?.name,
        id: pokemonData?.id,
        height: pokemonData?.height,
        weight: pokemonData?.weight,
        image: pokemonData?.sprites?.other?.['official-artwork']?.front_default,
        types: pokemonData?.types.map((typeSlot: any) => typeSlot.type.name),
        abilities: pokemonData.abilities.map((item: any) => item.ability.name),
      };
    } catch (error) {
      throw new Error(
        `Error fetching Pokemon with id ${pokemonId}: ${error.message}`,
      );
    }
  }

  // Returns a list of pokemon api items using pagination
  async getPokemonList(props: GetPokemonsQuery): Promise<PokemonResultList> {
    try {
      // query response for search by id or name, we return filtered pokemons with pagination
      if (props.pokemonId || props.pokemonName) {
        const response = await axios.get(
          `${process.env.API_URL}/pokemon?limit=${process.env.MAX_POKEMON}`,
        );
        const allPokemonList: PokemonApiItem[] = await response.data?.results;

        let filteredSearch: PokemonResultItem[];

        // filtered by exact id
        if (props.pokemonId) {
          filteredSearch = allPokemonList.reduce(
            (arr: PokemonResultItem[], pokemon) => {
              const urlId = pokemon.url.match(/(?<=\/)\d+(?=\/)/g)[0];
              if (Number(urlId) === props.pokemonId)
                arr.push({ name: pokemon.name, id: Number(urlId) });
              return arr;
            },
            [],
          );
        }

        // filtered by name
        else {
          filteredSearch = allPokemonList.reduce(
            (arr: PokemonResultItem[], pokemon: PokemonApiItem) => {
              const urlId = pokemon.url.match(/(?<=\/)\d+(?=\/)/g)[0];
              if (pokemon.name.includes(props.pokemonName))
                arr.push({ name: pokemon.name, id: Number(urlId) });
              return arr;
            },
            [],
          );
        }

        return {
          count: filteredSearch.length,
          result: filteredSearch.slice(
            props.offset,
            props.offset + props.limit,
          ),
        };
      }

      // no search id or name given, we return all pokemon with pagination
      const response = await axios.get(
        `${process.env.API_URL}/pokemon?limit=${props.limit}&offset=${props.offset}`,
      );

      return {
        count: Number(process.env.MAX_POKEMON),
        result: response.data?.results.map((pokemon: PokemonApiItem) => {
          const urlId = pokemon.url.match(/(?<=\/)\d+(?=\/)/g)[0];
          return { name: pokemon.name, id: Number(urlId) };
        }),
      };
    } catch (error) {
      throw new Error(`Error fetching PokemonList  ${error.message}`);
    }
  }

  // Returns a Pokemon sets of details given its ID
  async getPokemonDetails(pokemonId: number): Promise<PokemonDetails> {
    try {
      const responseDetails = await axios.get(
        `${process.env.API_URL}/pokemon-species/${pokemonId}`,
      );
      const pokemonDetails = responseDetails.data;

      let pokemonEvolutions: Array<EvolutionItem | EvolutionItem[]> = [];

      if (pokemonDetails.evolution_chain) {
        const responseEvolutions = await axios.get(
          pokemonDetails.evolution_chain.url,
        );
        const dataEvolutions = responseEvolutions.data;
        console.log('Evolutions chain');
        console.log(dataEvolutions);
        console.log(dataEvolutions.chain.evolves_to);

        pokemonEvolutions = extractEvolution(dataEvolutions.chain);
      } else if (pokemonDetails.evolves_from_species) {
        pokemonEvolutions.push(
          {
            name: pokemonDetails.evolves_from_species.name,
            id: pokemonDetails.evolves_from_species.url.match(
              /(?<=\/)\d+(?=\/)/g,
            )[0],
          },
          {
            name: pokemonDetails.name,
            id: pokemonDetails.id.toString(),
          },
        );
      } else {
        pokemonEvolutions.push({
          name: pokemonDetails.name,
          id: pokemonDetails.id.toString(),
        });
      }

      console.log(pokemonEvolutions);

      return {
        description: pokemonDetails?.flavor_text_entries?.find(
          (entrie: any) => entrie.language.name === 'en',
        )?.flavor_text,
        habitat: pokemonDetails.habitat?.name,
        shape: pokemonDetails.shape?.name,
        evolutions: pokemonEvolutions,
      };
    } catch (error) {
      throw new Error(
        `Error fetching Pokemon with id ${pokemonId}: ${error.message}`,
      );
    }

    function extractEvolution(chain: any) {
      const evolutions = {
        name: chain.species.name,
        id: chain.species.url.match(/(?<=\/)\d+(?=\/)/g)[0],
      };

      if (chain.evolves_to && chain.evolves_to.length > 0) {
        if (chain.evolves_to.length > 1) {
          return [
            evolutions,
            chain.evolves_to
              .map((evolution: any) => extractEvolution(evolution))
              .flat(),
          ];
        } else {
          return [
            [evolutions],
            chain.evolves_to
              .map((evolution: any) => extractEvolution(evolution))
              .flat(),
          ]
            .concat()
            .flat();
        }
      }

      return [evolutions];
    }
  }
}
