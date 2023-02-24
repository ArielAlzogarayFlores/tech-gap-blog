import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { useEffect } from "react";

type DefaultLayoutProps = {
  children: React.ReactNode;
};

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {

  return (
    <div className="bg-Background-Default selection:text-Text-Relevant selection:bg-CTA-Default">
      <Navbar />
      <Footer />
      <main> {children} </main>
    </div>
  );
};
export default DefaultLayout;
