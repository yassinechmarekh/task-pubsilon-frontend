import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

function WhyUs() {
  return (
    <section className={"bg-white py-10"} id="why-you-need-to-register">
      <div className="container">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-4">
          <div className="w-full lg:w-1/2">
            <Image
              src="/images/why-us.png"
              alt="about image"
              width={300}
              height={300}
              className={"mx-auto lg:mr-auto"}
              priority={false}
            />
          </div>
          <div className={"w-full lg:w-1/2"}>
            <h5 className={"subtitle"}>Why Choose Pubsilon ?</h5>
            <h1 className={"title mt-2"}>
              Coffee, Creativity & Countless Ideas
            </h1>
            <p className={"mt-4"}>
              We offer more than just services — we bring a unique working
              atmosphere where creativity and innovation flourish. Let’s build
              something amazing together.
            </p>
            <Link href="/login">
              <Button className={"second-btn mt-6"}>Get Started</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
