import Section from "@/components/Section";
import { getPost } from "@/content/blog/posts";
import { notFound } from "next/navigation";
export default function Page({ params }:{ params:{ slug:string }}){
  const post = getPost(params.slug);
  if(!post) return notFound();
  return (
    <Section title={post.title} center subtitle={`${post.date} • ${post.tags.join(", ")}`}>
        {post.image && (
          <div className="mb-6 overflow-hidden rounded-xl border border-alloy/40">
            <div className="aspect-[16/9] w-full bg-neutral-100 dark:bg-neutral-900">
              <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
            </div>
          </div>
        )}
      <article className="prose max-w-none prose-neutral dark:prose-invert">
        <div dangerouslySetInnerHTML={{ __html: post.body }} />
      </article>
    </Section>
  );
}
