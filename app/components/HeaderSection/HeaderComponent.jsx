import Image from "next/image";
import React from "react";
import HeaderNav from "./HeaderNav";

const HeaderComponent = () => {
  return (
    <header className="mt-2 flex w-full items-center justify-between py-4">
      <div>
        <Image
          src={"/StatMaster.png"}
          className="w-auto"
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
