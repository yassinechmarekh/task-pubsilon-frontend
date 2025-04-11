import LogoutBtn from "@/components/logout-btn";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Welcome page - Pubsilon",
};

function HomePage() {
  return (
    <section className={"bg-second-white"}>
      <div className="main-bg">
        <div className={"container"}>
          <div className="pt-10 w-1/3 mx-auto flex flex-col space-y-2 justify-center text-center">
            <h1 className={'text-3xl font-semibold text-main'}>Welcome to Pubsilon !</h1>
            <p>Your are login succuessfully.</p>
            <LogoutBtn className={'w-fit mx-auto'} />
          </div>
        </div>
        <Image
          src={"/images/home.png"}
          alt={"home image"}
          width={500}
          height={500}
          className={"w-full"}
          priority={true} 
        />
      </div>
    </section>
  );
}

export default HomePage;
