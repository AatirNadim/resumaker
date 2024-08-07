import React from "react";
import { SignIn } from "@clerk/nextjs";

const Login = () => {
  return (
    <section className="h-screen flex items-center justify-center">
      <SignIn fallbackRedirectUrl={"/"} />
    </section>
  );
};

export default Login;
