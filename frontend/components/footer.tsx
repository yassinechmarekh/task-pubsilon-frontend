import Link from "next/link";
import React from "react";

const navItems: {
  name: string;
  href: string;
}[] = [
  { name: "home", href: "#" },
  { name: "about us", href: "#" },
  { name: "our team", href: "#" },
  { name: "Why you need to register ?", href: "#" },
];

function Footer() {
  return (
    <section className={"bg-white py-4"}>
      <div className="container">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between text-xs gap-2">
          <p>
            Copyright &#169;2025 <span className={'font-semibold text-main capitalize'}>Pubsilon</span>. By{" "}
            <Link href="https://yassine-chmarekh.vercel.app/" target="_blank" className={'font-semibold hover:text-main transition-all'}>
              Yassine_ChM
            </Link>
          </p>
          <div className={"flex gap-4"}>
            {navItems.map((item, index) => (
              <Link
                href={item.href}
                key={index}
                className={
                  "text-black hover:text-main capitalize font-semibold transiyion-all"
                }
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
