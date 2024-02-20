import Image from "next/image"
import Link from "next/link"

const TeamCard = ({ team, leauge, season, action, leagueColor }) => {
  const { crest, shortName, id } = team

  return (
    <Link href={`/competion/${leauge}/${season}/${action}/${id}`}>
      <div
        style={{ color: leagueColor, textDecorationColor: leagueColor }}
        className={`flex hover:underline  cursor-pointer font-semibold justify-center items-center flex-col gap-2 p-2`}
      >
        <Image src={crest} alt={shortName} width={80} height={80} />
        <h3>{shortName}</h3>
      </div>
    </Link>
  )
}

export default TeamCard
