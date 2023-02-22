import "../style/globals.css";
import type { AppProps } from "next/app";
import localFont from "@next/font/local";
import DefaultLayout from "@/components/layout/DefaultLayout";
import AuthLayout from "@/components/layout/AuthLayout";
import { useRouter } from "next/router";

const satoshi = localFont({
  src: "../../public/font/Satoshi-Variable.woff2",
  variable: "--font-satoshi",
});

export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter();
  const isLoginPage = router.pathname === "/login";
  const isSignupPage = router.pathname === "/signup";

  const Layout = isLoginPage || isSignupPage ? AuthLayout : DefaultLayout;

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
