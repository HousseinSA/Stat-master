import Image from "next/image";
import Link from "next/link";
const LeagueItem = ({
  name,
  emblem,
  code,
  selectedComp,
  handelSelectedLeague,
  leagueColor,
  season,
  matchday,
  action,
}) => {
  const leagueActionPath =
    action !== "matches"
      ? `/competition/${code}/${season}/${action}`
      : `/competition/${code}/${season}/${action}/matchday/${matchday}`;
  return (
    <li
      className={`flex-1 h-auto cursor-pointer  p-3 ${
        selectedComp ? "bg-slate-700" : ""
      } item-hover  `}
      onClick={() => handelSelectedLeague(code, leagueColor, matchday)}
    >
      <Link href={leagueActionPath}>
        <div className="flex items-center justify-center gap-4">
          <Image
            src={emblem}
            alt={name}
            className="w-fit"
            width={25}
            height={25}
            priority
          />
          <span className="hidden md:flex md:flex-1">
            {code === "PD" ? "La Liga" : name}
          </span>
        </div>
      </Link>
    </li>
  );
};

export default LeagueItem;
