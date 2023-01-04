import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>LOST</h1>
      <Link to={`/`}>Back Home</Link>
    </div>
  );
};

export default NotFound;
