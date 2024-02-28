
import Skeleton from "react-loading-skeleton";

const TeamsSkeleton = () => {
  return (
    <div className="flex h-full w-full flex-wrap items-center justify-center gap-4 overflow-y-scroll p-2">
      {[...Array(20)].map((_, index) => (
        <TeamCardSkeleton key={index} />
      ))}
    </div>
  );
};

const TeamCardSkeleton = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 p-2 font-semibold transition duration-200 hover:scale-110 hover:underline">
      <Skeleton circle width={80} height={80} />
      <Skeleton width={80} />
    </div>
  );
};

export default TeamsSkeleton;
