import TeamMember from "@/components/teammember/TeamMember";
import Head from "next/head";
import React from "react";

import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

type Props = {};

type AboutProps = {};

const About: React.FC<AboutProps> = () => {
  return (
    <>
      <Head>
        <title>Tech-Gap | About</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div className="full-w flex justify-center mt-[140px] lg:mt-[80px]">
        <div className="w-full lg:w-[60%] 2xl:w-[40%]">
          <div className="w-full px-[30px] py-[60px] border-b border-Background-Light lg:border-x">
            <h1 className="text-mdxxl lg:text-xxl text-Text-Relevant font-black text-center">
              About Tech Gap.
            </h1>
          </div>
          <TeamMember
            name="Ariel A.F"
            role="Build team & Author"
            url="https://www.linkedin.com/in/ariel-alzogaray-flores-666833246/"
          />
          <TeamMember
            name="Alan Y."
            role="Build team & Author"
            url="https://www.linkedin.com/in/alan-yeger-aa1174266/"
          />
          <TeamMember
            name="Luis E.S"
            role="Build team & Author"
            url="https://www.linkedin.com/in/luis-embon-strizzi-9a288624a/"
          />
          <div className="w-full p-[30px] lg:border-b border-Background-Light lg:border-x flex gap-[30px] flex-col mb-[80px] lg:mb-0">
            <p className="font-normal text-Text-Relevant text-lg">
              Welcome to Tech-Gap, a website made by students and for students.
              Here, we aim to provide answers to your questions, offer advice,
              and discuss current topics in the fields of development, design,
              and more. Our goal is to offer you relevant and informative
              content, and your input is key in helping us achieve that aim.
            </p>
            <p className="font-normal text-Text-Relevant text-lg">
              We constantly try to improve and provide the best possible
              experience for our users. That is why we welcome any feedback,
              suggestions, or ideas for new features or improvements. If you
              have any thoughts on how we can make our site even better, please
              do not hesitate to reach out and let us know.
            </p>
            <p className="font-normal text-Text-Relevant text-lg">
              Tech-Gap Team
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;

export const getStaticProps: GetStaticProps<Props> = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common"])),
  },
});