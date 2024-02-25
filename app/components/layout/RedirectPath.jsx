"use client";
import { useEffect } from "react";
import { useLeagueStore } from "../../utils/StateStore";
import { redirect } from "next/navigation";

const RedirectPath = () => {
  const date = new Date().getFullYear();
  const { action, season, leagueCode, getClickedAction } = useLeagueStore();
  useEffect(() => {
    const store = window.localStorage.getItem("store");
    if (store !== undefined) {
      return;
    } else {
      redirect(`/competition/PL/${season || date}/standings`);
    }
  }, []);
};

export default RedirectPath;
