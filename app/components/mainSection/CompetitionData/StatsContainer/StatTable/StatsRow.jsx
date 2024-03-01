import Image from "next/image";
import Link from "next/link";
const StatsRow = ({ player, index, league, season, color: textColor }) => {
  const {
    assists,
    goals,
    playedMatches,
    player: { name },
    team: { name: teamName, crest, id },
  } = player;

  return (
    <tr className="text-center dark:bg-[#1F2937] dark:text-gray-400">
      <th
        scope="row"
        className="sticky left-0 z-20 whitespace-nowrap bg-white px-6 py-3 text-left font-medium text-gray-900  dark:bg-[#1F2937] dark:text-gray-400"
      >
        <span style={{ color: textColor }} className="mr-2 text-lg">
          {index + 1}
        </span>
        {name}
      </th>
      <td className="px-6 py-4 ">{goals}</td>
      <td className="px-6 py-4 ">{assists ? assists : "0"}</td>
      <td className="px-6 py-4 ">{playedMatches}</td>
      <td className="flex justify-center px-6 py-4 hover:bg-slate-500">
        <Link href={`/competition/${league}/${season}/teams/${id}`}>
          <Image src={crest} alt={teamName} width={50} height={50} />
        </Link>
      </td>
    </tr>
  );
};

export default StatsRow;
