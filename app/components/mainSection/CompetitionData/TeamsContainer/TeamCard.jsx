import Image from "next/image";
import Link from "next/link";

const TeamCard = ({ team, league, season, action, leagueColor, theme }) => {
  const { crest, shortName, id } = team;
  const teamNameColor = theme ? "#fff" : leagueColor;
  return (
    <Link href={`/competition/${league}/${season}/${action}/${id}`}>
      <div className="team-card flex cursor-pointer flex-col items-center justify-center gap-2 p-2 font-semibold transition duration-200 hover:scale-110 hover:underline">
        <Image src={crest} alt={shortName} width={80} height={80} />
        <h3 style={{ color: teamNameColor }}>{shortName}</h3>
      </div>
    </Link>
  );
};

export default TeamCard;
