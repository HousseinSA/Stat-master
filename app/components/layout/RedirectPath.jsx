"use client";
import { useEffect } from "react";
import { useLeagueStore } from "../../utils/StateStore";
import { redirect } from "next/navigation";

const RedirectPath = () => {
  const { action, season, leagueCode, getClickedAction } = useLeagueStore();
  useEffect(() => {
    const store = window.localStorage.getItem("store");
    // console.log(store);
    if (store !== undefined) {
      return;
    } else {
      getClickedAction(season || "standings");
      redirect(`/competion/${leagueCode}/${season}/${action || "standings"}`);
    }
  }, []);
};

export default RedirectPath;
