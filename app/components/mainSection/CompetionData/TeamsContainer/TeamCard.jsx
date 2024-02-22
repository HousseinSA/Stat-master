import Image from "next/image"
import Link from "next/link"

const TeamCard = ({ team, league, season,theme, action, leagueColor }) => {
  const { crest, shortName  , id } = team
  const teamNameColor = theme  ? '#fff':leagueColor
  return (
    <Link href={`/competion/${league}/${season}/${action}/${id}`}>
      <div

        className={`flex hover:scale-110 duration-200 transition hover:underline  cursor-pointer  font-semibold justify-center items-center flex-col gap-2 p-2`}
      >
        <Image src={crest} alt={shortName} width={80} height={80} />
        <h3 style={{ color: teamNameColor, textDecorationColor: teamNameColor }}>{shortName}</h3>
      </div>
    </Link>
  )
}

export default TeamCard
