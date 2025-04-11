"use client";

import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { deleteCookie, getCookie } from "cookies-next";

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
