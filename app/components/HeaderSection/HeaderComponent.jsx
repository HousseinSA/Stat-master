import Image from "next/image";
import React from "react";
import HeaderNav from "./HeaderNav";

const HeaderComponent = () => {
  return (
    <header className=" flex w-full items-center justify-between py-2">
      <div>
        <Image
          src={"/StatMaster.png"}
          className="h-3 w-20 md:h-6 md:w-auto"
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
