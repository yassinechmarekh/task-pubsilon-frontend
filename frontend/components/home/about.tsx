import Link from "next/link";
import React from "react";
import Image from "next/image";

// Components
import { Button } from "../ui/button";

function About() {
  return (
    <section className={"bg-white py-10"} id="about">
      <div className="container">
        <div className="flex flex-col-reverse lg:flex-row gap-4 items-center">
          <div className={"w-full lg:w-1/2"}>
            <h5 className={"subtitle"}>About Section</h5>
            <h1 className={"title mt-2"}>
              Pioneering Smart Digital Experiences
            </h1>
            <p className={"mt-4"}>
              At Pubsilon, we bring together creative minds and tech experts to
              develop cutting-edge solutions for digital transformation. From
              web and mobile applications to AI-powered tools, we help
              businesses become smarter and more efficient.
            </p>
            <Link href="/#why-you-need-to-register">
              <Button className={"second-btn mt-6"}>Learn more</Button>
            </Link>
          </div>
          <div className="w-full lg:w-1/2">
            <Image
              src="/images/about.png"
              alt="about image"
              width={500}
              height={500}
              className={"mx-auto lg:ml-auto"}
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
