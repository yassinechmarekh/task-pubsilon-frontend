import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

function Soon() {
  return (
    <section className={"bg-white"}>
      <div className="container">
        <div
          className={
            "py-10 md:py-20 w-full lg:w-3/5 mx-auto flex flex-col items-center space-y-4 text-center"
          }
        >
          <h1
            className={
              "text-2xl xs:text-3xl sm:text-4xl font-poppins font-semibold capitalize"
            }
          >
            Experience Digital Brilliance
          </h1>
          <p className={"text-sm sm:text-base"}>
            Join us and discover how our smart digital solutions can transform
            your business. <br />📅 Let’s build the future, together
          </p>
          <h1
            className={
              "text-3xl xs:text-4xl sm:text-5xl font-poppins font-bold text-main mt-3"
            }
          >
            October 20–27, 2025
          </h1>
          <div className={"flex gap-3 mt-6"}>
            <Link href="/login">
              <Button className={"main-btn text-xs sm:text-base"}>
                Register now
              </Button>
            </Link>
            <Link href="/#about">
              <Button className={"second-btn text-xs sm:text-base"}>
                Learn more
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className={"main-bg"}>
        <Image
          src={"/images/soon.png"}
          width={500}
          height={500}
          alt={"hero image"}
          className={"mx-auto"}
          priority={false}
        />
      </div>
    </section>
  );
}

export default Soon;
