import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "next-i18next";

type NavButtonsProps = {
  toggleMethod: () => void;
  state: boolean;
};

const NavButtons: React.FC<NavButtonsProps> = ({ toggleMethod, state }) => {
  const path = usePathname();
  const { t } = useTranslation("common");

  return (
    <>
      <nav className="h-[80px] fixed bottom-0 w-screen lg:static lg:w-auto dark:bg-Background-Default bg-Background-Default-LT">
        <ul className="h-full w-full flex items-center justify-center">
          <li className="h-full flex-grow lg:flex-grow-0 lg:w-[170px] relative group overflow-hidden flex items-center justify-center border-t lg:border-l lg:border-t-0 lg:border-b dark:border-Background-Light border-Extras-LT">
            {" "}
            <Link
              href="/"
              className={`w-full h-full text-center flex items-center justify-center z-10 font-medium ${
                path === "/"
                  ? "dark:text-Background-Default text-Background-Default-LT"
                  : "dark:text-Text-Relevant text-Text-Relevant-LT "
              }`}
            >
              Posts
            </Link>
            <span
              className={`w-full ${
                path === "/"
                  ? "h-full opacity-100"
                  : "h-[2px] opacity-0 group-hover:opacity-100"
              } absolute bottom-[0px] dark:bg-Text-Relevant bg-Text-Relevant-LT ease-in duration-200`}
            ></span>
          </li>
          <li className="h-full flex-grow lg:flex-grow-0 lg:w-[170px] relative group overflow-hidden flex items-center justify-center border-t border-l lg:border-t-0 lg:border-b dark:border-Background-Light border-Extras-LT">
            {" "}
            <Link
              href="/about"
              className={`w-full h-full text-center flex items-center justify-center z-10 font-medium ${
                path === "/about"
                  ? "dark:text-Background-Default text-Background-Default-LT"
                  : "dark:text-Text-Relevant text-Text-Relevant-LT "
              }`}
            >
              {t("About")}
            </Link>
            <span
              className={`w-full ${
                path === "/about"
                  ? "h-full opacity-100"
                  : "h-[2px] opacity-0 group-hover:opacity-100"
              } absolute bottom-[0px] dark:bg-Text-Relevant bg-Text-Relevant-LT ease-in duration-200`}
            ></span>
          </li>
          <li className="h-full flex-grow lg:flex-grow-0 lg:w-[170px] relative group overflow-hidden flex items-center justify-center border-t border-l lg:border-t-0 lg:border-b dark:border-Background-Light border-Extras-LT">
            {" "}
            <Link
              href="/contact"
              className={`w-full h-full text-center flex items-center justify-center z-10 font-medium ${
                path === "/contact"
                  ? "dark:text-Background-Default text-Background-Default-LT"
                  : "dark:text-Text-Relevant text-Text-Relevant-LT "
              }`}
            >
              {t("Contact")}
            </Link>
            <span
              className={`w-full ${
                path === "/contact"
                  ? "h-full opacity-100"
                  : "h-[2px] opacity-0 group-hover:opacity-100"
              } absolute bottom-[0px] dark:bg-Text-Relevant bg-Text-Relevant-LT ease-in duration-200`}
            ></span>
          </li>
          <li
            onClick={toggleMethod}
            title="Settings"
            className="h-full flex-grow  cursor-pointer lg:flex-grow-0 lg:w-[170px] relative group overflow-hidden hidden lg:flex items-center justify-center border-t border-l lg:border-t-0 lg:border-b dark:border-Background-Light border-Extras-LT"
          >
            <svg
              width="46"
              height="18"
              viewBox="0 0 46 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="z-10"
            >
              <rect
                width="46"
                height="2.5"
                transform="translate(0 15)"
                className={`ease-out duration-200 ${state ? 'dark:fill-[#010409] fill-Text-Relevant' : 'dark:fill-Text-Relevant fill-Background-Default'}`}
              />
              <rect
                width="46"
                height="2.5"
                transform="translate(0 7.5)"
                className={`ease-out duration-200 group-hover:w-[23px] group-hover:translate-x-[11px] group-hover:translate-y-[7.5px] ${state ? 'dark:fill-[#010409] fill-Text-Relevant' : 'dark:fill-Text-Relevant fill-Background-Default'}`}
              />
              <rect
                width="46"
                height="2.5"
                className={`ease-out duration-200 ${state ? 'dark:fill-[#010409] fill-Text-Relevant' : 'dark:fill-Text-Relevant fill-Background-Default'}`}
              />
            </svg>
            <span
              className={`w-full ${
                state ? "h-full" : "h-[2px]"
              } absolute bottom-[0px] dark:bg-Text-Relevant bg-Text-Relevant-LT ease-in duration-200 ${
                state ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              }`}
            ></span>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavButtons;
