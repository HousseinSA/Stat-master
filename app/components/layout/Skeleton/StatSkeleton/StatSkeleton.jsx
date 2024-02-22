import Skeleton from "react-loading-skeleton";
const StatsContainerSkeleton = () => {
  return (
    <div className="h-full w-full overflow-auto">
      <div className="flex w-full flex-col justify-center">
        <div className="sticky top-0 z-20 flex w-full items-center gap-2 p-2">
          <Skeleton width={80} height={50} />
          <Skeleton width={150} height={30} />
        </div>
        <div className="w-full flex-1">
          {[...Array(10)].map((_, index) => {
            // Render 10 placeholder rows
            return (
              <div
                key={index}
                className="flex w-full  items-center justify-center gap-2 p-2"
              >
                <Skeleton
                  circle={true}
                  width={50}
                  className="flex-1"
                  height={50}
                />
                <Skeleton width={150} height={20} className="flex-1" />
                <Skeleton width={100} height={20} className="flex-1" />
                <Skeleton width={100} height={20} className="flex-1" />
                <Skeleton width={100} height={20} className="flex-1" />
                <Skeleton width={100} height={20} className="flex-1" />
                <Skeleton width={100} height={20} className="flex-1" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StatsContainerSkeleton;
