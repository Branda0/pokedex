import { useState, useEffect } from "react";
import { Pagination, SearchBar, PokemonsGrid } from "../components";

const Pokedex = () => {
  const [page, setPage] = useState<number>(1);
  const [searchValue, setSearchValue] = useState<string>("");

  return (
    <div className="flex flex-1 flex-col w-full max-w-5xl m-auto px-2 py-10 sm:px-6 xl:px-0">
      <SearchBar searchValue={searchValue} setPage={setPage} setSearchValue={setSearchValue} />
      <PokemonsGrid searchValue={searchValue} page={page} setPage={setPage} />
    </div>
  );
};

export default Pokedex;
