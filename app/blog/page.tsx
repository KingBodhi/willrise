import Section from "@/components/Section";
import Link from "next/link";
import { posts } from "@/content/blog/posts";

export default function Page(){
  return (
    <Section title="Blog" subtitle="Research notes, standards commentary, and announcements.">
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map(p => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="rounded-xl border border-alloy/40 p-5 hover:border-signal">
            <div className="text-lg font-medium">{p.title}</div>
            <div className="mt-1 text-sm opacity-80">{p.excerpt}</div>
            <div className="mt-3 text-xs opacity-60">{p.date} • {p.tags.join(", ")}</div>
          </Link>
        ))}
      </div>
    </Section>
  )
}
