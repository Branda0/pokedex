import headerLogo from "../assets/img/pokedexHeader.png";
import pokeballLogo from "../assets/img/pokeball.png";
const Header = () => {
  return (
    <header className="flex shadow-md h-28 p-4 bg-gray-100 ">
      <div className="justify-center flex w-full ">
        <img src={headerLogo} className="object-contain mx-4" alt="Pokedex Title" />
      </div>
    </header>
  );
};

export default Header;
