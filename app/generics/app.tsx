"use client"

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "../_components/Generics/Button";
// import { Navigate, Outlet } from "react-router-dom";
import { useUser 
import Header from "./components/custom/Header";
import { Toaster } from "./components/ui/sonner";

function App() {
  const [count, setCount] = useState(0);
  const { user, isLoaded, isSignedIn } = useUser();

  if (!isSignedIn && isLoaded) {
    return <Navigate to={"/auth/sign-in"} />;
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
