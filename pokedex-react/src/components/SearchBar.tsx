import { SearchBarProps } from "../props";

const SearchBar = ({ searchValue, setSearchValue, setPage }: SearchBarProps) => {
  return (
    <input
      className="flex fixed left-3 right-3 bottom-6  border-2 rounded-full py-4 mb-10 mx-4 px-8 bg-white shadow-sm z-10 sm:sticky sm:top-10  sm:mx-10 text-xs sm:text-base outline-[#346ABD]"
      placeholder="Search a Pokemon by name or Pokedex #ID"
      type="text"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
        setPage(1);
      }}
    ></input>
  );
};

export default SearchBar;
