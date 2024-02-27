import Image from "next/image";
import React from "react";
import HeaderNav from "./HeaderNav";

const HeaderComponent = () => {
  return (
    <header className="flex h-full items-center justify-between py-4 sm:shrink-0">
      <div>
        <Image
          src={"/StatMaster.png"}
          className=" h-auto w-auto"
          alt="Logo"
          width={150}
          height={20}
          priority
        />
      </div>
      <HeaderNav />
    </header>
  );
};

export default HeaderComponent;
