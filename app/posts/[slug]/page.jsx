import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { IoHome } from "react-icons/io5"
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";

const postsDirectory = path.join(process.cwd(), "posts");

export async function generateStaticParams() {
    const filenames = fs.readdirSync(postsDirectory)
    return filenames.map((filename) => ({
      slug:filename.replace(/\.mdx$/,'')  
    }))
}

export default async function Page({ params }) {
    const { slug } = params;
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return (
        <>
            <Link href={'/'}>
                <button 
                className="mt-20 mx-4 bg-slate-200 px-6 py-2 font-semibold rounded-lg text-slate-950"
                >
                    <IoHome />
                </button>
            </Link>
            <div
             className="my-20 px-2 mx-auto prose prose-headings:text-slate-400 prose-p:text-slate-300"
            >
                <MDXRemote {...{ source: content }} />
            </div>
        </>
    )
}