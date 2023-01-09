import { useState, useEffect } from "react";
import { SearchBar, PokemonsGrid } from "../components";

const Pokedex = () => {
  const [page, setPage] = useState<number>(Number(sessionStorage.getItem("current-page")) || 1);
  const [searchValue, setSearchValue] = useState<string>(sessionStorage.getItem("search-value") || "");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [page]);

  return (
    <div className="flex flex-1 flex-col w-full max-w-5xl m-auto px-2 sm:mb-10 sm:px-6 xl:px-0">
      <SearchBar searchValue={searchValue} setPage={setPage} setSearchValue={setSearchValue} />
      <PokemonsGrid searchValue={searchValue} page={page} setPage={setPage} />
    </div>
  );
};

export default Pokedex;
