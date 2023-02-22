import Head from "next/head";
import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation";

const Index:React.FC = () => {

    const path = usePathname();
    const title = path ? path.charAt(1).toUpperCase() + path.slice(2) : '';
 //Categoria, muestra titulo y cards de esa categoria, tampoco lo hicimos en el otro
    return (
        <>
          <Head>
            <title>{`Tech-Gap | ${title}`}</title>
            <meta content="width=device-width, initial-scale=1" name="viewport" />
            <meta content="dark" name="color-scheme" />
            <meta name="description" content="Generated by create next app" />
          </Head>
          <div>Category {title}</div>
        </>
      );
};
export default Index;
