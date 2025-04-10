import Image from "next/image";
import React from "react";

const ourTeam: {
  name: string;
  post: string;
  profile: string;
}[] = [
  {
    name: "Paul Stone",
    post: "Senior web-developer",
    profile: "/images/team/1.png",
  },
  {
    name: "Steve Anderson",
    post: "Founder and CEO",
    profile: "/images/team/2.png",
  },
  {
    name: "Melinda Smit",
    post: "Web-designer",
    profile: "/images/team/3.png",
  },
  {
    name: "Jason Tacker",
    post: "Serial entrepreneur",
    profile: "/images/team/4.png",
  },
  {
    name: "Julia Brown",
    post: "Venture investor",
    profile: "/images/team/5.png",
  },
  {
    name: "Lola Goldman",
    post: "Top manager",
    profile: "/images/team/6.png",
  },
];

function Team() {
  return (
    <section className={"bg-second-white py-10"}>
      <div className="container">
        <div className={'w-full md:w-2/3 mx-auto text-center'}>
          <h5 className={'subtitle'}>Our Speakers</h5>
          <h1 className={'text-4xl font-bold capitalize mt-1'}>Meet lead tech experts</h1>
          <p className={'text-xs sm:text-sm mt-3'}>
            Baza has brought together some of the biggest minds in business and
            technology to discuss cutting-edge technology and disruptive trends
            in the IT world.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
            {ourTeam.map((item) => (
                <div key={item.name} className={'flex flex-col items-center space-y-1 text-center'}>
                    <Image src={item.profile} alt={item.name} width={180} height={180} className={'rounded-full'} />
                    <h5 className={'text-lg text-black font-semibold capitalize mt-2'}>{item.name}</h5>
                    <p className={'text-sm text-slate-600 capitalize'}>{item.post}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
