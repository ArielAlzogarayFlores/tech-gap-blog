import UserForm from "@/components/forms/UserForm";
import Head from "next/head";
import Image from "next/image";
import React from "react";

const Signup: React.FC = () => {
  return (
    <>
      <Head>
        <title>Tech-Gap | Sign Up</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div className="flex h-screen flex-col justify-center items-center gap-[60px]">
        <h1 className="dark:text-Text-Relevant text-Text-Relevant-LT font-black text-xxl">Sign up</h1>
        <UserForm text="Have an account?" link="Log in" url="/login" cta="Create an account"/>
      </div>
    </>
  );
};
export default Signup;
