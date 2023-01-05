import headerLogo from "../assets/img/pokedexHeader.png";
const Header = () => {
  return (
    <header className="flex justify-center shadow-md p-4 bg-gray-100 ">
      <img src={headerLogo} className=" h-24 object-contain" alt="Pokedex Title logo" />
    </header>
  );
};

export default Header;
