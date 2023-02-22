import { auth } from "../../firebase/client";
import { sendSignInLinkToEmail } from "firebase/auth";
import React, { useState } from "react";

import CtaButton from "./CtaButton";
import Divider from "./Divider";
import GoogleButton from "./GoogleButton";
import Input from "./Input";
import Link from "next/link";


type UserFormProps = {
  text: string;
  link: string;
  url: string;
};

const UserForm: React.FC<UserFormProps> = ({ text, link, url }) => {
  const [value, setValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const actionCodeSettings = {
    url: "http://localhost:3000",
    handleCodeInApp: true,
    iOS: {
      bundleId: "com.example.ios",
    },
    android: {
      packageName: "com.example.android",
      installApp: true,
      minimumVersion: "12",
    },
    dynamicLinkDomain: "localhost:3000",
  };

  const signin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendSignInLinkToEmail(auth, value, actionCodeSettings)
      .then(() => {
        window.localStorage.setItem("emailForSignIn", value);
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
      });
  };

  return (
    <form className="flex flex-col gap-[15px] mx-[30px]" >
      <Input changeProp={handleChange} />
      <CtaButton btnType="submit" label="Login to your account" icon={<></>} />
      <p className="text-Text-Relevant text-center">
        {text}{" "}
        <Link href={url} className="text-CTA-Default hover:underline">
          {link}
        </Link>
      </p> 
      <Divider />
      <GoogleButton />
    </form>
  );
};
export default UserForm;
