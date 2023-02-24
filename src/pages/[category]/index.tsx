import PostCard from "@/components/postcard/PostCard";
import getPostMetadata from "@/libs/getPostMetadata";
import { PostMetadata } from "@/libs/getPostMetadata";
import Head from "next/head";
import { usePathname } from "next/navigation";

const Index = (props: { data: PostMetadata[] }) => {
  const path = usePathname();

  const title = path ? path.charAt(1).toUpperCase() + path.slice(2) : "";

  const gradients = [
    "from-[#00FF85] to-[#00D1FF]",
    "from-[#FFD747] to-[#FF7A00]",
    "from-[#FFA800] to-[#FF00E5]",
    "from-[#FF01E4] to-[#FF003D]",
    "from-[#FF00B8] to-[#8F00FF]",
    "from-[#0038FF] to-[#00E0FF]",
    "from-[#DBFF00] to-[#00E0FF]",
  ];

  function getGradient(num: number) {
    return Math.floor(Math.random() * num);
  }

  return (
    <>
      <Head>
        <title>{`Tech-Gap | ${title}`}</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div className="w-full flex justify-center mt-[140px] lg:mt-[80px]">
        <div className="w-[90%] flex flex-col items-center gap-[40px] md:w-[65%] xl:w-[50%] 2xl:w-[35%] mt-[60px] mb-[140px]">
          <div className="flex flex-col items-center gap-[15px] ">
            <p className="font-medium">
              {props.data.length > 1
                ? ` ${props.data.length} posts for...`
                : ` ${props.data.length} post for...`}
            </p>
            <h1
              className={`text-center font-black text-xxl bg-clip-text text-transparent bg-gradient-to-r ${
                gradients[getGradient(6)]
              }`}
            >
              {" "}
              {`#${title}`}{" "}
            </h1>
          </div>
          {props.data?.map((post) => {
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
export default Index;

export function getStaticProps(context: any) {
  const category: string = context.params.category;

  const Postdata = getPostMetadata();

  const finalData = Postdata.filter(
    (post) => category === post.category.toString()
  );

  return {
    props: {
      data: finalData,
    },
  };
}

export function getStaticPaths() {
  const posts = getPostMetadata();
  const postpaths = posts.map((post) => {
    const categories = post?.category.toString();
    return {
      params: {
        category: categories,
      },
    };
  });

  return {
    paths: postpaths,
    fallback: false,
  };
}
