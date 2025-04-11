import LoginForm from "@/components/login-form";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Login page - Pubsilon",
};

function LoginPage() {
  return (
    <section className={"bg-second-white"}>
      <div className={"main-bg min-height"}>
        <div className="container">
          <div className="flex items-center h-full gap-4 py-10">
            <Image
              src={"/images/login.png"}
              alt={"login image"}
              width={500}
              height={500}
              className={'mx-auto w-2/5 hidden md:block'}
              priority={true}
            />
            <LoginForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
