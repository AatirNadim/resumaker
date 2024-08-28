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
        <section className="flex items-center justify-center p-1 rounded-full bg-white dark:shadow-none shadow-lg">
          <nav className="flex gap-4 sm:gap-6 rounded-full ">
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
