import getSvgByKey from "../assets/svg/pokemon-types/getSvgByKey";
import { TypeCardProps } from "../props";

const TypeCard = ({ type }: TypeCardProps) => {
  return (
    <div className={`flex justify-center items-center  bg-${type}Dark rounded-full px-5 py-[0.3rem]`}>
      <img src={getSvgByKey(type)} className=" h-3 mr-1" alt={`type ${type} Logo`} />
      <span className=" capitalize text-white text-sm font-semibold md:text-xs lg:text-sm">{type}</span>
    </div>
  );
};

export default TypeCard;
