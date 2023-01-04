import { Link, useParams } from "react-router-dom";

const Pokemon = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>{`Pokemon n°${id}`}</h1>
      <Link to={`/`}>BACK HOME</Link>
    </div>
  );
};

export default Pokemon;
