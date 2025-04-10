import Image from "next/image";
import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link href={'/'} className={"flex items-center space-x-1 hover:opacity-80 transition-all"}>
      <Image
        src={"/images/logo.svg"}
        alt={"logo"}
        width={25}
        height={25}
        className={"w-5 xs:w-6"}
      />
      <span className={"text-xl xs:text-2xl font-bold uppercase text-main"}>
        pubsilon
      </span>
    </Link>
  );
}

export default Logo;
