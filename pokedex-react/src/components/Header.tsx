import headerLogo from "../assets/img/pokedexHeader.png";
import pokeballLogo from "../assets/img/pokeball.png";
const Header = () => {
  return (
    <header className="flex shadow-md h-20 p-3 bg-gray-100 sm:h-32 sm:p-6">
      <div className="justify-center flex w-full ">
        <img src={headerLogo} className="object-contain mx-4" alt="Pokedex Title" />
      </div>
    </header>
  );
};

export default Header;
