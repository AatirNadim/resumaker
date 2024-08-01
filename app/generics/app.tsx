"use client";

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import { Button } from "../_components/Generics/Button";
// import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "@clerk/nextjs";
import Header from "../_components/Header";
import { Toaster } from "../_components/Toaster";
import { useRouter } from "next/navigation";

function App() {
  const [count, setCount] = useState(0);
  const { user, isLoaded, isSignedIn } = useUser();
  const router = useRouter();

  if (!isSignedIn && isLoaded) {
    return router.push("/auth/sign-in");
  }

  return (
    <>
      <Header />
      <Outlet />
      <Toaster />
    </>
  );
}

export default App;
