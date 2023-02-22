import Chip from "@/components/postcard/Chip";
import PostCard from "@/components/postcard/PostCard";
import getPostMetadata from "@/libs/getPostMetadata";
import { PostMetadata } from "@/libs/getPostMetadata";
import Head from "next/head";
import Image from "next/image";
import React from "react";

const Home = (props: { postMetaData: PostMetadata[] }) => {
  return (
    <>
      <Head>
        <title>Tech-Gap | Home</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content="dark" name="color-scheme" />
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div className="w-full flex justify-center mt-[140px] lg:mt-[80px]">
        <div className="w-[90%] flex flex-col gap-[30px] md:w-[65%] xl:w-[50%] 2xl:w-[35%] mt-[60px] mb-[140px]">
          {props.postMetaData?.map((post) => {
            return (
              <PostCard
                key={post.slug}
                tag={post.category}
                title={post.title}
                author={post.author}
                authorcontact={post.authorContact}
                date={post.date}
                readtime={post.readtime}
                views={post.slug}
                likes={16}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;

export function getServerSideProps() {
  const postMetaData = getPostMetadata();
  return {
    props: {
      postMetaData,
    },
  };
}
