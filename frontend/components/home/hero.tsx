import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

function Hero() {
  return (
    <section className={'bg-second-white'}>
      <div className="main-bg">
        <div className="container">
          <div
            className={
              "py-10 md:py-20 w-full md:w-2/3 lg:w-3/5 mx-auto flex flex-col items-center space-y-4 text-center"
            }
          >
            <h1
              className={
                "text-2xl xs:text-3xl sm:text-4xl font-poppins font-semibold capitalize"
              }
            >
              The biggest tech event for web developers
            </h1>
            <p className={"text-sm sm:text-base"}>
              Baza has brought together some of the biggest minds in business
              and technology to discuss disruptive trends in the IT world.
            </p>
            <div className={"flex gap-3"}>
              <Link href="#">
                <Button className={"main-btn text-xs sm:text-base"}>
                  Register now
                </Button>
              </Link>
              <Link href="#">
                <Button className={"second-btn text-xs sm:text-base"}>
                  Learn more
                </Button>
              </Link>
            </div>
          </div>
          <div>
            <Image
              src={"/images/main-hero.png"}
              width={300}
              height={300}
              alt={"hero image"}
              className={"mx-auto w-48 xs:w-60 md:w-64 lg:w-72"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
