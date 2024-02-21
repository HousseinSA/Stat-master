import Image from "next/image"
import Link from "next/link"

const ScorersRow = ({ scorer, league, color, season, index }) => {
  const {
    assists,
    goals,
    playedMatches,
    player: { name },
    team: { name: teamName, crest, id },
  } = scorer
  return (
    <tr className="w-full">
      <td className="px-4 py-3 text-sm font-semibold border whitespace-nowrap">
        <span style={{ color: color }} className="mr-2 text-lg">
          {index + 1}
        </span>
        {name}
      </td>
      <td className="px-4 py-3 font-semibold text-md border whitespace-nowrap">
        {goals}
      </td>
      <td className="px-4 py-3 font-semibold text-md border whitespace-nowrap">
        {assists ? assists : "0"}
      </td>
      <td className="px-4 font-semibold py-3 text-md border whitespace-nowrap">
        {playedMatches}
      </td>
      <Link href={`/competion/${league}/${season}/teams/${id}`}>
        <td className="px-4 py-3 hover:scale-110 transition duration-200 text-sm border whitespace-nowrap">
          <Image src={crest} alt={teamName} width={50} height={50} />
        </td>
      </Link>
    </tr>
  )
}

export default ScorersRow
