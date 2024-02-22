import Skeleton from "react-loading-skeleton"

Skeleton
const CardSkeleton = () => {
  return (
    <div className="flex hover:scale-110 duration-200 transition hover:underline  cursor-pointer font-semibold justify-center items-center flex-col gap-2 p-2">
      <Skeleton width={80} height={80} />
      <h3>
        <Skeleton />
      </h3>
    </div>
  )
}

export default CardSkeleton
