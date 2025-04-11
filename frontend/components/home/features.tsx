import Image from "next/image";
import React from "react";

const featuresItems: {
  title: string;
  image: string;
}[] = [
  {
    title: "20+ Innovative Projects",
    image: "/images/features/feature-1.png",
  },
  {
    title: "Dynamic & Creative Environment",
    image: "/images/features/feature-2.png",
  },
  {
    title: "Solutions for Business Growth",
    image: "/images/features/feature-3.png",
  },
  {
    title: "Cutting-edge Technology",
    image: "/images/features/feature-4.png",
  },
];

function Features() {
  return (
    <section className={"bg-white py-10"}>
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuresItems.map((feature, index) => (
            <div
              key={index}
              className={
                "flex items-center justify-center space-x-2 border border-slate-200 p-4 rounded-2xl hover:bg-second-white hover:cursor-text transition-all"
              }
            >
              <Image
                src={feature.image}
                alt="test"
                width={50}
                height={50}
                priority={false}
              />
              <h3 className={"font-semibold capitalize"}>{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
