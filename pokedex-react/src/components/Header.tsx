import { Link } from "react-router-dom";
import headerLogo from "../assets/img/pokedexHeader.png";

const Header = () => {
  return (
    <header className="flex justify-center shadow-md p-3 bg-gray-100 sm:p-6">
      <Link to={"/"}>
        <img src={headerLogo} className="h-11 sm:h-20" alt="Pokedex Title" />
      </Link>
    </header>
  );
};

export default Header;
