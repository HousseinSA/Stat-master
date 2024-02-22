import Image from "next/image";
import Link from "next/link";

const ScorersRow = ({ scorer, league, color, season, index }) => {
  const {
    assists,
    goals,
    playedMatches,
    player: { name },
    team: { name: teamName, crest, id },
  } = scorer;
  return (
    <tr>
      <td className="whitespace-nowrap border px-4 py-3 text-sm font-semibold">
        <span style={{ color: color }} className="mr-2 text-lg">
          {index + 1}
        </span>
        {name}
      </td>
      <td className="text-md whitespace-nowrap border px-4 py-3 font-semibold">
        {goals}
      </td>
      <td className="text-md whitespace-nowrap border px-4 py-3 font-semibold">
        {assists ? assists : "0"}
      </td>
      <td className="text-md whitespace-nowrap border px-4 py-3 font-semibold">
        {playedMatches}
      </td>
      <Link href={`/competion/${league}/${season}/teams/${id}`}>
        <td className="flex-1 whitespace-nowrap border px-4 py-3 text-sm transition duration-200 hover:scale-110">
          <Image src={crest} alt={teamName} width={50} height={50} />
        </td>
      </Link>
    </tr>
  );
};

export default ScorersRow;
