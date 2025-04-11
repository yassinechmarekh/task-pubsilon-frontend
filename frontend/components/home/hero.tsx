import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

function Hero() {
  return (
    <section className={"bg-second-white"}>
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
              Empowering Businesses With Smart Digital Solutions
            </h1>
            <p className={"text-sm sm:text-base"}>
              Pubsilon designs and develops innovative digital products to help
              businesses thrive in a fast-changing tech world.
            </p>
            <div className={"flex gap-3"}>
              <Link href="/login">
                <Button className={"main-btn text-xs sm:text-base"}>
                  Get Started
                </Button>
              </Link>
              <Link href="/#about">
                <Button className={"second-btn text-xs sm:text-base"}>
                  Discover More
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
              priority={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
