"use client";

import React, { useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import Link from "next/link";

// Components
import { Button } from "./ui/button";
import Logo from "./logo";

// Icons
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import LogoutBtn from "./logout-btn";

const navItems: {
  name: string;
  href: string;
}[] = [
  { name: "home", href: "/" },
  { name: "about us", href: "/#about" },
  { name: "our team", href: "/#our-team" },
  { name: "Why Choose Us?", href: "/#why-choose-us" },
];


function Navbar() {
  const [token, setToken] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const checkToken = () => {
      const cookieToken = getCookie("token") as string | undefined;
      setToken(cookieToken || null);
    };

    checkToken();

    const interval = setInterval(checkToken, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={
        "container py-4 bg-second-white flex items-center justify-between relative"
      }
    >
      <HiOutlineMenuAlt2
        size={30}
        onClick={() => setIsOpen(!isOpen)}
        className={"w-6 xs:w-8 lg:hidden"}
      />
      <Logo />
      {/* <div className={`flex flex-col lg:flex-row gap-4 lg:gap-8 absolute origin-top ${isOpen ? 'scale-y-100' : 'scale-y-0'} top-full left-0 right-0 lg:static bg-white py-4 lg:py-0 transition-all`}> */}
      <div className={"lg:flex gap-8 hidden"}>
        {navItems.map((item, index) => (
          <Link href={item.href} key={index} className={"nav-item"}>
            {item.name}
          </Link>
        ))}
      </div>
      {token ? (
        <LogoutBtn />
      ) : (
        <div className={"lg:flex gap-4 hidden"}>
          <Link href="/">
            <Button className={"main-btn text-sm"}>register</Button>
          </Link>
          <Link href="/">
            <Button className={"second-btn text-sm"}>login</Button>
          </Link>
        </div>
      )}
      <div className={"lg:hidden"}></div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-lg rounded-md z-50 lg:hidden">
          <nav className="flex flex-col p-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 nav-item"
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4 px-4 flex gap-2 flex-col xs:flex-row">
              <Link href="/login" className={"w-full xs:w-1/2"}>
                <Button className="w-full bg-white text-black border border-gray-300 hover:bg-gray-100 capitalize">
                  register
                </Button>
              </Link>
              <Link href="/login" className={"w-full xs:w-1/2"}>
                <Button className="w-full bg-white text-black border border-gray-300 hover:bg-gray-100 capitalize">
                  login
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}

export default Navbar;
