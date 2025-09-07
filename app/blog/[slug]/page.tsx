import Section from "@/components/Section";
import { getPost } from "@/content/blog/posts";
import { notFound } from "next/navigation";

export default function Page({ params }:{ params: { slug: string } }){
  const post = getPost(params.slug);
  if(!post) return notFound();
  return (
    <Section title={post.title} subtitle={`${post.date} • ${post.tags.join(", ")}`}>
      <article className="prose max-w-none prose-neutral dark:prose-invert">
        <div dangerouslySetInnerHTML={{ __html: post.body }} />
      </article>
    </Section>
  )
}
