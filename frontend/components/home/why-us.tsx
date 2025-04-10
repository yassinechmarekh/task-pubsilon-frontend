import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

function WhyUs() {
  return (
    <section className={"bg-white py-10"}>
      <div className="container">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-4">
          <div className="w-full lg:w-1/2">
            <Image
              src="/images/why-us.png"
              alt="about image"
              width={300}
              height={300}
              className={"mx-auto lg:mr-auto"}
            />
          </div>
          <div className={"w-full lg:w-1/2"}>
            <h5 className={"subtitle"}>Why you need to register</h5>
            <h1 className={"title mt-2"}>
              Coffee pizza and a lot of career opportunities
            </h1>
            <p className={"mt-4"}>
              Baza has brought together some of the biggest minds in business
              and technology to discuss cutting-edge technology and disruptive
              trends in the IT world. In this challenging time, we will combine
              our knowledge to become even stronger. We’ll discuss the best
              practices for workflows and talk about new tools for effective
              work.
            </p>
            <Link href="#">
              <Button className={"second-btn mt-6"}>Learn more</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
