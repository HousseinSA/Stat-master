import Image from "next/image";
import Link from "next/link";
const StatsRow = ({
  player,
  index,
  league,
  season,
  changeAction,
  color: textColor,
}) => {
  const {
    assists,
    goals,
    playedMatches,
    player: { name },
    team: { name: teamName, crest, id },
  } = player;

  return (
    <tr
      className="border-b bg-white text-center dark:border-gray-700 dark:bg-gray-800"
      onClick={() => changeAction("teams")}
    >
      <th
        scope="row"
        className="sticky left-0 z-30 whitespace-nowrap bg-white px-6 py-3 text-left font-medium text-gray-900 shadow-sm dark:bg-slate-700 dark:text-white"
      >
        <span style={{ color: textColor }} className="mr-2 text-lg">
          {index + 1}
        </span>
        {name}
      </th>
      {/* Add shadow class to the other td elements if needed */}
      <td className="px-6 py-4 shadow-sm">{goals}</td>
      <td className="px-6 py-4 shadow-sm">{assists ? assists : "0"}</td>
      <td className="px-6 py-4 shadow-sm">{playedMatches}</td>
      <td className="flex justify-center px-6 py-4 hover:bg-slate-500">
        <Link href={`/competition/${league}/${season}/teams/${id}`}>
          <Image src={crest} alt={teamName} width={50} height={50} />
        </Link>
      </td>
    </tr>
  );
};

export default StatsRow;
