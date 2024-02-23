"use client";
import CompetionContent from "./components/mainSection/CompetionData/CompetionContent";
const NotFound = ({ error, reset }) => {
  return (
    <CompetionContent>
      <div className="flex h-full w-full flex-col items-center justify-center gap-4">
        <h3 className="text-xl font-bold text-red-500">Something went wrong</h3>
        <button
          className="rounded-md bg-[#001F3F] px-4 py-2 text-xl font-semibold text-white"
          onClick={() => reset()}
        >
          Reset
        </button>
      </div>
    </CompetionContent>
  );
};

export default NotFound;
