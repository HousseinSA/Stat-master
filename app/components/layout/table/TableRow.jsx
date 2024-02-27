import Image from "next/image";
import Link from "next/link";
const TableRow = ({ team, league, season, changeAction, textColor }) => {
  const {
    draw,
    goalDifference,
    goalsAgainst,
    goalsFor,
    lost,
    playedGames,
    points,
    position,
    won,
    form,
  } = team;
  const { crest, shortName, id } = team.team;

  return (
    <tr
      className=" border-b bg-white dark:border-gray-700 dark:bg-gray-800 "
      onClick={() => changeAction("teams")}
    >
      <th
        scope="row"
        className="item-hover sticky left-0 z-20 flex cursor-pointer items-center gap-1 whitespace-nowrap px-6 py-4 font-medium text-gray-900 shadow-sm hover:text-white dark:text-white"
      >
        <Link
          className="hover:slate-500 flex items-center gap-2 "
          href={`/competition/${league}/${season}/teams/${id}`}
        >
          <span style={{ color: textColor }}>{position}</span>
          <Image src={crest} alt={shortName} width={50} height={50} />
          {shortName}
        </Link>
      </th>
      <td className="px-6 py-4"> {playedGames}</td>
      <td className="px-6 py-4">
        <span className="rounded-sm bg-green-100 px-2 py-1 font-semibold leading-tight text-green-700">
          {won}
        </span>
      </td>
      <td className="px-6 py-4">
        <span className="rounded-sm bg-slate-100 px-2 py-1 font-semibold leading-tight text-slate-700">
          {draw}
        </span>
      </td>
      <td className="px-6 py-4">
        <span className="rounded-sm bg-red-100 px-2 py-1 font-semibold leading-tight text-red-700">
          {lost}
        </span>
      </td>
      <td className="px-6 py-4"> {goalsFor}</td>
      <td className="px-6 py-4">{goalsAgainst}</td>
      <td className="px-6 py-4">{goalDifference}</td>
      <td className="px-6 py-4"> {points}</td>
      {league !== "CL" && form && (
        <td className="mr-2 flex h-full items-center justify-center gap-1">
          {league !== "CL" &&
            form.split(",").map((state, index) => {
              return (
                <div
                  key={index}
                  className={`flex h-5 w-5 items-center   justify-center rounded-full p-3 text-xs font-normal text-white  ${
                    state === "W"
                      ? "bg-green-500"
                      : state === "D"
                        ? "bg-slate-500"
                        : state === "L" && "bg-red-500"
                  }`}
                >
                  {state}
                </div>
              );
            })}
        </td>
      )}
    </tr>
  );
};

export default TableRow;
