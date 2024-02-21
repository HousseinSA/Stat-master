"use client"
const NotFound = ({ error, reset }) => {
  return (
    <div className="w-full h-full flex-col flex justify-center items-center gap-4">
      <h3 className="font-bold text-red-500 text-xl">Something went wrong</h3>
      <button
        className="rounded-md px-4 py-2 font-semibold text-xl text-white bg-[#001F3F]"
        onClick={() => reset()}
      >
        Reset
      </button>
    </div>
  )
}

export default NotFound
