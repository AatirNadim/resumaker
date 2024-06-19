"use client"; 

import { useUser } from "@clerk/nextjs";
import React from "react";
import Header from "../_components/Header";
import { Toaster } from "../_components/Toaster";

const page = () => {
  // const { user, isLoaded, isSignedIn } = useUser();

  return (
    <>
      <Header />
      <div>this is the wrapper page</div>;
      <Toaster />
    </>
  );
};

export default page;
