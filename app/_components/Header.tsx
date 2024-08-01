"use client";
import React from "react";
import { Button } from "./ui/button";
// import { Link } from "react-router-dom";
import Link from "next/link";

// import { UserButton, useUser } from "@clerk/clerk-react";
import { UserButton, useUser } from "@clerk/nextjs";

function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <div className="p-3 px-5 flex justify-between shadow-md">
      <Link href={"/dashboard"}>
        <img
          src="/logo.svg"
          className="cursor-pointer"
          width={100}
          height={100}
        />
      </Link>
      {isSignedIn ? (
        <div className="flex gap-2 items-center">
          <Link href={"/dashboard"}>
            <Button variant="outline">Dashboard</Button>
          </Link>
          <UserButton />
        </div>
      ) : (
        <Link href={"/auth/login"}>
          <Button>Get Started</Button>
        </Link>
      )}
    </div>
  );
}

export default Header;
