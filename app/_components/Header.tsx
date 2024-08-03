"use client";
import React from "react";
import { Button } from "./ui/button";
// import { Link } from "react-router-dom";
import Link from "next/link";

// import { UserButton, useUser } from "@clerk/clerk-react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { ModeToggle } from "./ui/theme-toggle";

function Header() {
  const { user, isSignedIn } = useUser();
  return (
    // <div className="p-3 px-5 flex justify-between shadow-md">
    //   <Link href={"/dashboard"}>
    //     <img
    //       src="/logo.svg"
    //       className="cursor-pointer"
    //       width={100}
    //       height={100}
    //     />
    //   </Link>
    //   {isSignedIn ? (
    //     <div className="flex gap-2 items-center">
    //       <Link href={"/dashboard"}>
    //         <Button variant="outline">Dashboard</Button>
    //       </Link>
    //       <UserButton />
    //     </div>
    //   ) : (
    //     <Link href={"/auth/login"}>
    //       <Button>Get Started</Button>
    //     </Link>
    //   )}
    // </div>
    <header className="px-4 lg:px-6 py-2 lg:py-4 flex items-center">
      <Link
        href="#"
        className="flex items-center justify-center"
        prefetch={false}
      >
        <span className="text-3xl font-bold text-primary">Resumaker</span>
      </Link>
      <section className="ml-auto grid gap-6 grid-cols-2 items-center">
        <ModeToggle />
        <section className="flex items-center justify-center p-1 rounded-full bg-white">
          <nav className="flex gap-4 sm:gap-6">
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </nav>
        </section>
      </section>
    </header>
  );
}

export default Header;
