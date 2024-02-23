import CardSkeleton from "./CardSkeleton";

const TeamsContainerSkeleton = () => {
  const teamSkeleton = Array.from({ length: 20 });
  return (
    <div className="flex w-full min-w-full flex-wrap items-center justify-center gap-4 overflow-y-scroll p-2">
      {teamSkeleton.map((card, index) => {
        return <CardSkeleton key={index} />;
      })}
    </div>
  );
};

export default TeamsContainerSkeleton;
