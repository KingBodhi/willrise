import Section from "../../../components/Section";
import { getPost } from "../../../content/blog/posts";

export default function Page({ params }:{ params:{ slug:string }}){
  const post = getPost(params.slug);
  if(!post) return <Section center title="Not found"><p>Post not found.</p></Section>;
  return (<Section>
    <article className="mx-auto max-w-3xl">
      {post.image && <div className="mb-6 aspect-[16/9] overflow-hidden rounded-xl border border-alloy/40"><img src={post.image} alt={post.title} className="h-full w-full object-cover"/></div>}
      <h1 className="font-mokoto text-3xl mb-2">{post.title}</h1>
      <div className="text-sm opacity-70 mb-6">{post.date}</div>
      <div className="prose prose-neutral dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: post.body }} />
    </article>
  </Section>);
}
