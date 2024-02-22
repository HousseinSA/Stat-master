import CardSkeleton from "./CardSkeleton"

const TeamSkeleton = () => {
  const TeamSkeleton = Array.from({ length: 20 })
  return (
    <div className="w-full min-w-full flex gap-4 justify-center flex-wrap overflow-y-scroll items-center p-2">
      {TeamSkeleton.map((card) => {
        return <CardSkeleton key={card} />
      })}
    </div>
  )
}

export default TeamSkeleton
