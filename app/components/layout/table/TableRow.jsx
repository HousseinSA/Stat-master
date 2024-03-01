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
    <tr className="h-full w-full text-center dark:bg-[#1F2937] dark:text-gray-400">
      <th
        scope="row"
        className="item-hover sticky left-0 z-20 whitespace-nowrap bg-white px-6 py-3 text-left font-medium text-gray-900   dark:bg-[#1F2937] dark:text-gray-400"
        onClick={() => changeAction("teams")}
      >
        <Link
          className="flex items-center gap-2"
          href={`/competition/${league}/${season}/teams/${id}`}
        >
          <span style={{ color: textColor }}>{position}</span>
          <Image src={crest} alt={shortName} width={50} height={50} />
          <span className="hidden md:block">{shortName}</span>
        </Link>
      </th>
      <td className="p-2 md:p-3">{playedGames}</td>
      <td className="p-2 text-green-500  ">{won}</td>
      <td className="p-2 text-gray-500">{draw}</td>
      <td className="p-2 text-red-500  ">{lost}</td>
      <td className="p-2 md:p-3">{goalsFor}</td>
      <td className="p-2 md:p-3">{goalsAgainst}</td>
      <td className="p-2 md:p-3">{goalDifference}</td>
      <td className="p-2 md:p-3">{points}</td>
      {league !== "CL" && form && (
        <td className="flex h-full items-center justify-center gap-1 p-2 text-sm">
          {form.split(",").map((state, index) => (
            <div
              key={index}
              className={`flex h-5 w-5 items-center justify-center rounded-full p-1 text-xs font-normal text-white ${
                state === "W"
                  ? "bg-green-500"
                  : state === "D"
                    ? "bg-slate-500"
                    : "bg-red-500"
              }`}
            >
              {state}
            </div>
          ))}
        </td>
      )}
    </tr>
  );
};

export default TableRow;
