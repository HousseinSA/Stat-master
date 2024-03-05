"use client";
import Image from "next/image";
import React from "react";
import HeaderNav from "./HeaderNav";
import Link from "next/link";
import { useLeagueStore } from "@/utils/StateStore";

const HeaderComponent = () => {
  const { leagueCode, season, setClickedAction } = useLeagueStore();
  return (
    <header className=" flex w-full items-center justify-between py-2">
      <Link
        href={`/competition/${leagueCode}/${season}/standings`}
        onClick={() => setClickedAction("standings")}
      >
        <Image
          src={"/StatMaster.png"}
          className="h-3 w-20 md:h-6 md:w-auto"
          alt="Logo"
          width={150}
          height={20}
          priority
        />
      </Link>
      <HeaderNav />
    </header>
  );
};

export default HeaderComponent;
