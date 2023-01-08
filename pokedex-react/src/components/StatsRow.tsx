import { StatsRowProps } from "../props";

const StatsRow = ({ stats }: StatsRowProps) => {
  return (
    <div className="flex gap-10 py-4 border-b-2 border-gray-200">
      {stats.map((stat, index) => {
        return (
          <div key={index} className="flex flex-row items-center">
            <span className=" w-20 capitalize text-gray-400">{stat.name}</span>
            <div className="flex flex-1 flex-wrap gap-4 gap-x-8">
              {stat.value instanceof Array ? (
                stat.value.map((statItem, index) => {
                  return (
                    <span key={index} className="capitalize">
                      {statItem}
                    </span>
                  );
                })
              ) : (
                <span key={index} className="capitalize">
                  {stat.value}
                </span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsRow;
