import Skeleton from "react-loading-skeleton";

const TeamContainerSkeleton = () => {
  return (
    <div className="flex flex-col justify-center gap-8 overflow-y-auto p-4">
      <div className="mx-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Skeleton circle={true} width={150} height={150} />
          <Skeleton width={200} />
        </div>
        <div>
          <div className="flex items-center gap-1">
            <Skeleton width={80} />
            <Skeleton width={100} />
          </div>
          <div className="flex items-center gap-1">
            <Skeleton width={80} />
            <Skeleton width={100} />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-8">
        <h1 className="flex items-center gap-1">
          <Skeleton width={80} />
          <Skeleton width={150} />
        </h1>
        <div className="flex items-center justify-center gap-6">
          <h3 className="text-md font-semibold">Competitions</h3>
          <div className="flex w-full items-center justify-center gap-6">
            {[1, 2, 3].map((index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-3"
              >
                <Skeleton circle={true} width={80} height={80} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <h3 className="font-semibold">Matches</h3>
      <div className="h-96 overflow-y-auto">
        <table className="w-full">
          <tbody>
            {[1, 2, 3].map((index) => (
              <tr key={index}>
                <td>
                  <Skeleton width={100} />
                </td>
                <td>
                  <Skeleton width={100} />
                </td>
                <td>
                  <Skeleton width={100} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeamContainerSkeleton;
