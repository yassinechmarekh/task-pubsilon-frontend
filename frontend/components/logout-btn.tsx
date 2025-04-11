"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { deleteCookie } from "cookies-next";

// Components
import { Button } from "./ui/button";

interface LogoutBtnPros {
  className?: string;
}

function LogoutBtn({ className }: LogoutBtnPros) {
  const router = useRouter();

  const handleLogout = () => {
    deleteCookie("token");
    router.push("/login");
  };

  return (
    <div>
      <Button className={`second-btn ${className}`} onClick={handleLogout}>
        logout
      </Button>
    </div>
  );
}

export default LogoutBtn;
