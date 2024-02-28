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
    <tr className="h-full">
      <td
        className="item-hover cursor-pointer whitespace-nowrap p-3 text-sm"
        onClick={() => changeAction("teams")}
      >
        <Link
          className="hover:slate-500 flex items-center gap-2 "
          href={`/competition/${league}/${season}/teams/${id}`}
        >
          <span style={{ color: textColor }}>{position}</span>
          <Image src={crest} alt={shortName} width={50} height={50} />
          <span>{shortName}</span>
        </Link>
      </td>
      <td className="whitespace-nowrap p-3 text-sm  "> {playedGames}</td>
      <td className="whitespace-nowrap p-3 text-center  text-sm ">
        <span className="rounded-sm bg-green-100 p-2 text-sm font-semibold  text-green-700  ">
          {won}
        </span>
      </td>
      <td className="whitespace-nowrap p-3 text-center  text-sm">
        <span className="rounded-sm bg-slate-100 p-2 font-semibold leading-tight text-slate-700">
          {draw}
        </span>
      </td>
      <td className="whitespace-nowrap p-3 text-center  text-sm">
        <span className="whitespace-nowrap rounded-sm  bg-red-100  p-2 text-sm font-semibold text-red-700  ">
          {lost}
        </span>
      </td>
      <td className="whitespace-nowrap p-3 text-sm  "> {goalsFor}</td>
      <td className="whitespace-nowrap p-3 text-sm  ">{goalsAgainst}</td>
      <td className="whitespace-nowrap p-3 text-sm  ">{goalDifference}</td>
      <td className="whitespace-nowrap p-3 text-sm "> {points}</td>
      {league !== "CL" && form && (
        <td className=" flex  h-full items-center justify-center gap-1   whitespace-nowrap p-3 text-sm">
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
<tr>
  <td className="whitespace-nowrap p-3 text-sm  ">liverpool</td>
  <td className="whitespace-nowrap p-3 text-sm  ">24</td>
  <td className="whitespace-nowrap p-3 text-sm ">23</td>
  <td className="whitespace-nowrap p-3 text-sm ">23</td>
  <td className="whitespace-nowrap p-3 text-sm ">23</td>
  <td className="whitespace-nowrap p-3 text-sm ">23</td>
  <td className="whitespace-nowrap p-3 text-sm ">23</td>
  <td className="whitespace-nowrap p-3 text-sm ">23</td>
  <td className="whitespace-nowrap p-3 text-sm ">23</td>
  <td className="whitespace-nowrap p-3 text-sm ">23</td>
</tr>;
