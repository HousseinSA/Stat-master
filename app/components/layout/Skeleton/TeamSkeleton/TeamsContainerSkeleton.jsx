import CardSkeleton from "./CardSkeleton"

const TeamsContainerSkeleton = () => {
  const teamSkeleton = Array.from({ length: 20 })
  return (
    <div className="w-full min-w-full flex gap-4 justify-center flex-wrap overflow-y-scroll items-center p-2">
      {teamSkeleton.map((card) => {
        return <CardSkeleton key={card} />
      })}
    </div>
  )
}

export default TeamsContainerSkeleton
