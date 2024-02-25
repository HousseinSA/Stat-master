"use client";
import { SkeletonTheme } from "react-loading-skeleton";
import UclSkeleton from "../../../../components/layout/Skeleton/StandingSkeleton/UclSkeleton";
import "react-loading-skeleton/dist/skeleton.css";
import StandingsSkeleton from "../../../../components/layout/Skeleton/StandingSkeleton/StandingsSkeleton";
import { useLeagueStore } from "../../../../utils/StateStore";
import StatSkeleton from "../../../../components/layout/Skeleton/StatSkeleton/StatSkeleton";
import MatchTableSkeleton from "../../../../components/layout/Skeleton/matchSkeleton/MatchTableSkeleton";
import TeamsContainerSkeleton from "../../../../components/layout/Skeleton/TeamSkeleton/TeamsContainerSkeleton";
import TeamContainerSkeleton from "../../../../components/layout/Skeleton/TeamSkeleton/TeamContainerSkeleton";
import { useParams } from "next/navigation";
const Loading = () => {
  const { action, theme, leagueCode } = useLeagueStore();
  const params = useParams();
  const loadingAction = {
    stats: <StatSkeleton />,
    standings: <StandingsSkeleton />,
    matches: <MatchTableSkeleton />,
    teams: <TeamsContainerSkeleton />,
  };
  const baseColor = theme === "light" ? "#B0B0B0" : "#FFFFFF";
  const highlightColor = theme === "light" ? "#B8B8B8" : "#333333";
  return (
    <SkeletonTheme baseColor={baseColor} highlightColor={highlightColor}>
      {params.teamId ? <TeamContainerSkeleton /> : loadingAction[action]}
    </SkeletonTheme>
  );
};

export default Loading;
