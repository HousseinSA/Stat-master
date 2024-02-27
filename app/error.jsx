"use client";
const NotFound = ({ error, reset }) => {
  return (
    <div className="flex h-full flex-col w-full items-center justify-center gap-4">
      <h3 className="text-xl font-bold text-red-500">Something went wrong</h3>
      <button
        className="rounded-md bg-[#001F3F] px-4 py-2 text-xl font-semibold text-white"
        onClick={() => reset()}
      >
        Reset
      </button>
    </div>
  );
};

export default NotFound;
