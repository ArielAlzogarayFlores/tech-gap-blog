import { useEffect, useState, useTransition } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

type SettingsProps = {};

const Settings: React.FC<SettingsProps> = () => {
  //Toggle Language

  const router = useRouter();
  const activeLanguage = router.locale;

  const toggleLanguage = (newLocale: "en" | "es") => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  const toggleLanguageMobile = () => {
    if (activeLanguage === "en") {
      toggleLanguage("es");
    } else {
      toggleLanguage("en");
    }
  };

  const { t } = useTranslation();

  //Toggle Theme

  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    if (localStorage.theme) {
      setTheme(localStorage.theme);
    }
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = (newTheme: "light" | "dark") => {
    // Update the state and save the new theme to localStorage
    setTheme(newTheme);
    localStorage.theme = newTheme;
  };

  const toggleThemeMobile = () => {
    if (theme === "dark") {
      setTheme("light");
      localStorage.theme = "light";
    } else {
      setTheme("dark");
      localStorage.theme = "dark";
    }
  };

  return (
    <div className="flex lg:flex-col gap-[15px] text-base">
      <div className="text-Text-Default font-medium flex items-center justify-start gap-[10px]">
        <button
          onClick={() => toggleLanguageMobile()}
          className="ease-out duration-150"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="lg:hidden"
          >
            <path
              d="M12 22C10.6333 22 9.34167 21.7373 8.125 21.212C6.90833 20.6873 5.846 19.9707 4.938 19.062C4.02933 18.154 3.31267 17.0917 2.788 15.875C2.26267 14.6583 2 13.3667 2 12C2 10.6167 2.26267 9.321 2.788 8.113C3.31267 6.90433 4.02933 5.846 4.938 4.938C5.846 4.02933 6.90833 3.31233 8.125 2.787C9.34167 2.26233 10.6333 2 12 2C13.3833 2 14.679 2.26233 15.887 2.787C17.0957 3.31233 18.154 4.02933 19.062 4.938C19.9707 5.846 20.6873 6.90433 21.212 8.113C21.7373 9.321 22 10.6167 22 12C22 13.3667 21.7373 14.6583 21.212 15.875C20.6873 17.0917 19.9707 18.154 19.062 19.062C18.154 19.9707 17.0957 20.6873 15.887 21.212C14.679 21.7373 13.3833 22 12 22ZM12 19.95C12.4333 19.35 12.8083 18.725 13.125 18.075C13.4417 17.425 13.7 16.7333 13.9 16H10.1C10.3 16.7333 10.5583 17.425 10.875 18.075C11.1917 18.725 11.5667 19.35 12 19.95ZM9.4 19.55C9.1 19 8.83767 18.429 8.613 17.837C8.38767 17.2457 8.2 16.6333 8.05 16H5.1C5.58333 16.8333 6.18733 17.5583 6.912 18.175C7.63733 18.7917 8.46667 19.25 9.4 19.55ZM14.6 19.55C15.5333 19.25 16.3623 18.7917 17.087 18.175C17.8123 17.5583 18.4167 16.8333 18.9 16H15.95C15.8 16.6333 15.6127 17.2457 15.388 17.837C15.1627 18.429 14.9 19 14.6 19.55ZM4.25 14H7.65C7.6 13.6667 7.56233 13.3373 7.537 13.012C7.51233 12.6873 7.5 12.35 7.5 12C7.5 11.65 7.51233 11.3127 7.537 10.988C7.56233 10.6627 7.6 10.3333 7.65 10H4.25C4.16667 10.3333 4.104 10.6627 4.062 10.988C4.02067 11.3127 4 11.65 4 12C4 12.35 4.02067 12.6873 4.062 13.012C4.104 13.3373 4.16667 13.6667 4.25 14ZM9.65 14H14.35C14.4 13.6667 14.4377 13.3373 14.463 13.012C14.4877 12.6873 14.5 12.35 14.5 12C14.5 11.65 14.4877 11.3127 14.463 10.988C14.4377 10.6627 14.4 10.3333 14.35 10H9.65C9.6 10.3333 9.56267 10.6627 9.538 10.988C9.51267 11.3127 9.5 11.65 9.5 12C9.5 12.35 9.51267 12.6873 9.538 13.012C9.56267 13.3373 9.6 13.6667 9.65 14ZM16.35 14H19.75C19.8333 13.6667 19.896 13.3373 19.938 13.012C19.9793 12.6873 20 12.35 20 12C20 11.65 19.9793 11.3127 19.938 10.988C19.896 10.6627 19.8333 10.3333 19.75 10H16.35C16.4 10.3333 16.4373 10.6627 16.462 10.988C16.4873 11.3127 16.5 11.65 16.5 12C16.5 12.35 16.4873 12.6873 16.462 13.012C16.4373 13.3373 16.4 13.6667 16.35 14ZM15.95 8H18.9C18.4167 7.16667 17.8123 6.44167 17.087 5.825C16.3623 5.20833 15.5333 4.75 14.6 4.45C14.9 5 15.1627 5.57067 15.388 6.162C15.6127 6.754 15.8 7.36667 15.95 8ZM10.1 8H13.9C13.7 7.26667 13.4417 6.575 13.125 5.925C12.8083 5.275 12.4333 4.65 12 4.05C11.5667 4.65 11.1917 5.275 10.875 5.925C10.5583 6.575 10.3 7.26667 10.1 8ZM5.1 8H8.05C8.2 7.36667 8.38767 6.754 8.613 6.162C8.83767 5.57067 9.1 5 9.4 4.45C8.46667 4.75 7.63733 5.20833 6.912 5.825C6.18733 6.44167 5.58333 7.16667 5.1 8Z"
              className="fill-Text-Relevant-LT dark:fill-[#EDEDED]"
            />
          </svg>
        </button>
        <div className="hidden lg:block text-[#97A0CB] dark:text-Text-Default font-medium ease-out duration-150">
          <button
            onClick={() => toggleLanguage("en")}
            className={`font-medium ease-out duration-150 ${
              activeLanguage === "en"
                ? "dark:text-Text-Relevant text-Text-Relevant-LT"
                : "dark:text-Text-Default text-[#97A0CB]"
            }`}
          >
            English
          </button>{" "}
          |{" "}
          <button
            onClick={() => toggleLanguage("es")}
            className={`font-medium ease-out duration-150 ${
              activeLanguage === "en"
                ? "dark:text-Text-Default text-[#97A0CB]"
                : "dark:text-Text-Relevant text-Text-Relevant-LT"
            }`}
          >
            Español
          </button>
        </div>
      </div>
      <div className="text-Text-Default font-medium flex items-center justify-start gap-[10px]">
        <button
          onClick={() => {
            toggleThemeMobile();
          }}
          className="ease-out duration-150"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="lg:hidden"
          >
            <path
              d="M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22ZM12 20V4C14.1217 4 16.1566 4.84285 17.6569 6.34315C19.1571 7.84344 20 9.87827 20 12C20 14.1217 19.1571 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z"
              className="fill-Text-Relevant-LT dark:fill-[#EDEDED]"
            />
          </svg>
        </button>
        <div className="hidden lg:block text-[#97A0CB] dark:text-Text-Default ease-out duration-150">
          <button
            onClick={() => {
              toggleTheme("dark");
            }}
            className="dark:text-Text-Relevant text-[#97A0CB] font-medium ease-out duration-150"
          >
            Dark
          </button>{" "}
          |{" "}
          <button
            onClick={() => {
              toggleTheme("light");
            }}
            className="text-Text-Relevant-LT dark:text-Text-Default font-medium ease-out duration-150"
          >
            Light
          </button>
        </div>
      </div>
    </div>
  );
};
export default Settings;
