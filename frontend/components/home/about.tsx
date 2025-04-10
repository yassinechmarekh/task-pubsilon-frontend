import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

function About() {
  return (
    <section className={"bg-white py-10"}>
      <div className="container">
        <div className="flex flex-col-reverse lg:flex-row gap-4 items-center">
          <div className={"w-full lg:w-1/2"}>
            <h5 className={"subtitle"}>
              About Event
            </h5>
            <h1 className={'title mt-2'}>Largest event for web developers and UI/UX designers</h1>
            <p className={'mt-4'}>
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
          <div className="w-full lg:w-1/2">
            <Image
              src="/images/about.png"
              alt="about image"
              width={500}
              height={500}
              className={'mx-auto lg:ml-auto'}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
