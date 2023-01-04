import { Link } from "react-router-dom";

const Pokedex = () => {
  return (
    <div>
      <h1>HOME</h1>
      <Link to={`/pokemon/3`}>CLICK</Link>
    </div>
  );
};

export default Pokedex;
