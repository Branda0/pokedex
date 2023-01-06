const SearchBar = ({
  searchValue,
  setSearchValue,
  setPage,
}: {
  searchValue: string;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <input
      className="flex sticky top-10 border-2 rounded-full py-4 mb-10 px-8 bg-white shadow-sm z-10 sm:mx-10 text-xs sm:text-base outline-[#346ABD]"
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
