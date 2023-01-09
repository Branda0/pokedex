import { SearchBarProps } from "../props";

const SearchBar = ({ searchValue, setSearchValue, setPage }: SearchBarProps) => {
  return (
    <input
      className="fixed left-0 right-0  bottom-10  border-2 rounded-full py-4 mb-0 mx-6 px-8 text-xs bg-white shadow-sm z-10 sm:mt-14 sm:sticky sm:top-10 sm:mx-10 sm:text-base outline-[#346ABD]"
      placeholder="Search a Pokemon by name or Pokedex #ID"
      type="text"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
        setPage(1);
        sessionStorage.setItem("current-page", "1");
      }}
    />
  );
};

export default SearchBar;
