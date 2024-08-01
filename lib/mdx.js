import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export function getPostSlugs() {
    return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug) {
    const fullPath = path.join(postsDirectory, `${slug}`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    return { data, content };
}

export async function getAllPosts() {
    const slugs = getPostSlugs();

    const posts = slugs.map((slug)=> {
        const { data } =getPostBySlug(slug)
        return {
            slug: slug.replace(/\.mdx$/,''),
            frontMatter: data
        }
    });
    return posts;
}