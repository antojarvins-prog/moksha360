import type { Metadata } from "next";
import { blogs } from "../data";
import { FadeIn } from "@/components/FadeIn";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const blog = blogs.find(b => b.slug === params.slug);
  if (!blog) return { title: "Not Found" };
  return { title: `${blog.title} | Moksha360 Blog`, description: blog.desc };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const blog = blogs.find(b => b.slug === params.slug);
  if (!blog) notFound();

  return (
    <main className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <Link href="/blog" className="inline-flex items-center text-[#13AFF0] hover:underline mb-12 font-medium">
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
      </Link>
      <FadeIn>
        <h1 className="text-4xl md:text-6xl font-bold text-[#3D7500] mb-8 font-poppins">{blog.title}</h1>
        <article className="max-w-none font-opensans text-gray-700">
           <p className="text-2xl leading-relaxed border-l-4 border-[#3D7500] pl-6 italic bg-gray-50 py-4 mb-10">
             {blog.desc}
           </p>
           <p className="mb-6 text-lg leading-loose">This is a full-length SEO article designed to capture top-of-funnel search traffic natively related to <strong>{blog.title}</strong>.</p>
           <p className="text-lg leading-loose">Moksha360 continues to provide full artist lifecycle support within Bengaluru and across global networks. By following the strategies outlined in this guide, artists can immediately tap into new exposure pathways.</p>
        </article>
      </FadeIn>
    </main>
  );
}
