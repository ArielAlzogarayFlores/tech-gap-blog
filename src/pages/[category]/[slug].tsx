import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "@/libs/getPostMetadata";
import ViewCounter from "@/components/postcard/ViewCounter";

//Slug es el nombre del archivo pero sin la extensión

// const getPostContent = (slug: string) => {
//   const folder = "src/posts/";
//   const file = `${folder}${slug}.md`;
//   const content = fs.readFileSync(file, "utf8"); //Le muestro archivos y devuelve el contenido
//   const matterResult = matter(content); //Convierte frontmatter a un objecto asi puedo acceder a las propiedades
//   return matterResult;
// };

const Page = (props: { data: any }) => {
  const capitalizeSlug =
    props.data.slug.charAt(0).toUpperCase() + props.data.slug.slice(1);
  return (
    <>
      <div className="hidden">
        <ViewCounter slug={props.data.slug} blogPage={true} />
      </div>
      <div className="flex flex-col items-center justify-center pt-[80px] ">
        <article className="prose lg:prose-xl pt-[60px]">
          <h1 className="text-Danger">{props.data.title} </h1>
          <Markdown>{props.data.postContent}</Markdown>
        </article>
      </div>
    </>
  );
};

export default Page;

export function getStaticProps(context: any) {
  const name: string = context.params.slug;

  const Postdata = getPostMetadata();

  const finalData = Postdata.find((post) => name === post.slug);

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
        slug: post.slug,
      },
    };
  });

  return {
    paths: postpaths,
    fallback: false,
  };
}
// Cosas que faltan agregar:
// Buildear el proyecto y ver bien lo de rutas estáticas
// Funcionalidad de likes y visualizaciones