import "../style/globals.css";
import type { AppProps } from "next/app";
import localFont from "@next/font/local";
import DefaultLayout from "@/components/layout/DefaultLayout";
import AuthLayout from "@/components/layout/AuthLayout";
import { useRouter } from "next/router";
import { useEffect } from "react";

const satoshi = localFont({
  src: "../../public/font/Satoshi-Variable.woff2",
  variable: "--font-satoshi",
});

export const toggleTheme = () => {
  const theme = localStorage.getItem('theme') || 'light'

  if (theme === 'light') {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'light')
  }
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isLoginPage = router.pathname === "/login";
  const isSignupPage = router.pathname === "/signup";

  const Layout = isLoginPage || isSignupPage ? AuthLayout : DefaultLayout;

  useEffect(() => {
    const theme = localStorage.getItem("theme") || "light";
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <>
      <style jsx global>{`
        :root {
          --font-satoshi: ${satoshi.style.fontFamily};
        }
      `}</style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
