import React from "react";

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    //El target blank es para abrirlo en otra pestaña en lugar de salir de la página

    <div className="text-Text-Default text-sm font-normal select-none fixed top-[80px] lg:bottom-[30px] lg:top-auto lg:right-[30px] h-[60px] lg:h-auto w-full lg:w-auto flex items-center justify-center gap-[15px] bg-Background-Default border-b lg:border-b-0 border-Background-Light">
      <a
        href="https://mail.google.com/mail/u/0/?fs=1&to=tech.gap.blog@gmail.com&tf=cm"
        target="_blank"
        rel="noopener noreferrer"
        className="text-Text-Relevant"
      >
        Gmail
      </a>{" "}
      |{" "}
      <a
        href="https://github.com/LuisEmbonStrizzi/Tech-Gap"
        target="_blank"
        rel="noopener noreferrer"
        className="text-Text-Relevant"
      >
        Github
      </a>
    </div>
  );
};
export default Footer;
