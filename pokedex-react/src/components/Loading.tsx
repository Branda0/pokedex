import pokeballImg from "../assets/img/pokeball.png";
const Loading = () => {
  return (
    <div className="flex flex-col flex-1 justify-center items-center ">
      <img className=" w-16 mb-2 animate-bounce " src={pokeballImg} alt="pokeball" />
      <span
        className="border-4 border-double border-gray-600
       leading-3 px-3 py-2 rounded-lg font-code"
      >
        Loading ...
      </span>
    </div>
  );
};
export default Loading;
