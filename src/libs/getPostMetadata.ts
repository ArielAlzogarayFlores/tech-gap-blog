import fs from "fs";
import matter from "gray-matter";

export interface PostMetadata {
  title: string;
  date: string;
  slug: string;
  author: string;
  readtime: number;
  category: string;
  authorContact: string;
  postContent: any;
}

const getPostMetadata = (): PostMetadata[] => {
  const folder = "src/posts/";
  const files = fs.readdirSync(folder); //Leo el directorio
  const markdownPosts = files.filter((file) => file.endsWith(".md")); //Solo obtengo los archivos md

  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`src/posts/${fileName}`, "utf8"); //Obtengo el md
    const matterResult = matter(fileContents); //Convierte frontmatter a un objecto asi puedo acceder a las propiedades

    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      slug: fileName.replace(".md", ""),
      author: matterResult.data.author,
      readtime: matterResult.data.readtime,
      category: matterResult.data.category,
      authorContact: matterResult.data.authorContact,
      postContent: matterResult.content,
    };
  });

  return posts
    .sort((a, b) => {
      if (a.date < b.date) {
        return -1;
      }
      if (a.date > b.date) {
        return 1;
      }

      return 0;
    })
    .reverse();
};
export default getPostMetadata;
