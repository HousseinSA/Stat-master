"use client";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import StandingsSkeleton from "../../../../components/layout/Skeleton/StandingSkeleton/StandingsSkeleton";
import { useLeagueStore } from "../../../../utils/StateStore";
import StatSkeleton from "../../../../components/layout/Skeleton/StatSkeleton/StatSkeleton";
import MatchesSkeleton from "../../../../components/layout/Skeleton/matchSkeleton/MatchesSkeleton";
import TeamsSkeleton from "../../../../components/layout/Skeleton/TeamSkeleton/TeamsSkeleton";
import TeamSkeleton from "../../../../components/layout/Skeleton/TeamSkeleton/TeamSkeleton";
import { useParams } from "next/navigation";
const Loading = () => {
  const { action, theme } = useLeagueStore();
  const params = useParams();
  const loadingAction = {
    stats: <StatSkeleton />,
    standings: <StandingsSkeleton />,
    matches: <MatchesSkeleton />,
    teams: <TeamsSkeleton />,
  };
  const baseColor = theme === "light" ? "#B0B0B0" : "#FFFFFF";
  const highlightColor = theme === "light" ? "#B8B8B8" : "#333333";

  return (
    <SkeletonTheme baseColor={baseColor} highlightColor={highlightColor}>
      {params.teamId ? <TeamSkeleton /> : loadingAction[action]}
    </SkeletonTheme>
  );
};

export default Loading;
