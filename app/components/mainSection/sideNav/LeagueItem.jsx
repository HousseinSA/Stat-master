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
    <Link href={leagueActionPath}>
      <li
        className={`cursor-pointer rounded-full lg:p-2 ${
          selectedComp ? "bg-slate-700" : ""
        } item-hover action-hover `}
        onClick={() => handelSelectedLeague(code, leagueColor, matchday)}
      >
        <div className="flex items-center justify-center gap-4 lg:justify-start">
          <Image
            src={emblem}
            alt={name}
            className="min-h-8 min-w-8"
            width={25}
            height={25}
            priority
          />
          <span className="hidden lg:flex">
            {code === "PD" ? "La Liga" : name}
          </span>
        </div>
      </li>
    </Link>
  );
};

export default LeagueItem;
