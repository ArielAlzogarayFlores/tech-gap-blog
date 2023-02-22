import UserForm from "@/components/forms/UserForm";
import Head from "next/head";
import Image from "next/image";
import React from "react";

const Login: React.FC = () => {
  return (
    <>
      <Head>
        <title>Tech-Gap | Log In</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content="dark" name="color-scheme" />
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div className="flex h-screen flex-col justify-center items-center gap-[60px]">
        <h1 className="text-Text-Relevant font-black text-xxl">Log In</h1>
        <UserForm text="Do not have an account?" link="Sign Up" url="/signup" />
      </div>
    </>
  );
};
export default Login;