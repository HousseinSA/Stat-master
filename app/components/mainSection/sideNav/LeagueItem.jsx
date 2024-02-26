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
        className={`cursor-pointer p-3 ${
          selectedComp ? "bg-slate-700" : ""
        } item-hover  `}
        onClick={() => handelSelectedLeague(code, leagueColor, matchday)}
      >
        <div className="flex items-center gap-4">
          <Image
            src={emblem}
            alt={name}
            className="min-h-[40px] min-w-[40px]"
            width={25}
            height={25}
            priority
          />
          <span className="hidden md:flex md:flex-1">
            {code === "PD" ? "La Liga" : name}
          </span>
        </div>
      </li>
    </Link>
  );
};

export default LeagueItem;
