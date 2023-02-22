import React from "react";
import Logo from "../global/Logo";
import Settings from "../navbar/Settings";

type AuthLayoutProps = {
  children: React.ReactNode;
};

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <>
      <header className="fixed top-0 h-[80px] lg:h-auto w-full px-[32px] lg:pt-[32px] flex lg:flex-col lg:gap-[30px] justify-between items-center lg:items-start border-b lg:border-none border-b-Background-Light">
        <Logo />
        <Settings />
      </header>
      <main> {children} </main>
    </>
  );
};
export default AuthLayout;
