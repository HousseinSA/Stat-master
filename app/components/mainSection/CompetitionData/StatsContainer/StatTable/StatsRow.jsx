import Image from "next/image";
import Link from "next/link";
const StatsRow = ({
  player,
  index,
  league,
  season,
  changeAction,
  color,
  theme,
}) => {
  const {
    assists,
    goals,
    playedMatches,
    player: { name },
    team: { name: teamName, crest, id },
  } = player;
  const textColor = theme ? "#fff" : color;

  return (
    <tr
      className=" border-b bg-white text-center dark:border-gray-700 dark:bg-gray-800"
      onClick={() => changeAction("teams")}
    >
      <th
        scope="row"
        className="whitespace-nowrap px-6 py-4 text-left font-medium text-gray-900  dark:text-white"
      >
        <span style={{ color: textColor }} className="mr-2 text-lg">
          {index + 1}
        </span>
        {name}
      </th>
      <td className="px-6 py-4"> {goals}</td>
      <td className="px-6 py-4"> {assists ? assists : "0"}</td>
      <td className="px-6 py-4"> {playedMatches}</td>
      <td className=" flex justify-center  px-6 py-4 hover:bg-slate-500">
        <Link href={`/competition/${league}/${season}/teams/${id}`}>
          <Image src={crest} alt={teamName} width={50} height={50} />
        </Link>
      </td>
    </tr>
  );
};

export default StatsRow;
