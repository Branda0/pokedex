import { Link } from "react-router-dom";
import { ProfessorOakMsg } from "../components";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center w-full max-w-5xl m-auto px-2 py-10 sm:px-6 xl:px-0">
      <ProfessorOakMsg
        message={"It's seems that you are lost, be careful you could face a wild Pokemon in this area ..."}
      />
      <Link className="flex w-fit justify-center mt-8" to={`/`}>
        <p className=" px-6 py-2 text-sm rounded-md bg-[#346BBD] text-white">Back Home</p>
      </Link>
    </div>
  );
};

export default NotFound;
