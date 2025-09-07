import Section from "@/components/Section";
import Link from "next/link";
import { posts } from "@/content/blog/posts";
export default function Page(){
  return (
    <Section title="Blog" center subtitle="Research notes, standards commentary, and announcements.">
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map(p => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="rounded-xl border border-alloy/40 p-0 hover:border-signal overflow-hidden">
            <div className="aspect-[16/9] w-full bg-neutral-100 dark:bg-neutral-900">{p.image && <img src={p.image} alt={p.title} className="h-full w-full object-cover" />}</div>
              <div className="p-5"><div className="text-lg font-medium">{p.title}</div>
            <div className="mt-1 text-sm opacity-80">{p.excerpt}</div>
            <div className="mt-3 text-xs opacity-60">{p.date} • {p.tags.join(", ")}</div></div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
