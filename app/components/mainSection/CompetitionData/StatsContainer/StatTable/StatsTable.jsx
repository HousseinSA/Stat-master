import StatsHead from "./StatsHead";
import StatsRow from "./StatsRow";
const StatsTable = ({
  scorers,
  season,
  changeAction,
  league,
  color,
  theme,
}) => {
  return (
   
      <table className=" h-auto w-full text-sm text-gray-500 dark:text-gray-400">
        <StatsHead />
        <tbody>
          {scorers.map((player, index) => {
            return (
              <StatsRow
                player={player}
                key={index}
                color={color}
                index={index}
                theme={theme}
                season={season}
                changeAction={changeAction}
                league={league}
              />
            );
          })}
        </tbody>
      </table>

  );
};

export default StatsTable;