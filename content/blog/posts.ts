export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  body: string; // simple HTML for now
};

export const posts: Post[] = [
  {
    slug: "introducing-kinetic-fall-arrest",
    title: "Introducing the Kinetic Fall-Arrest System",
    excerpt: "Why posture and pressure distribution matter during and after a fall.",
    date: "2025-09-06",
    tags: ["Research","Design"],
    body: "<p>Placeholder post. Replace with your content. This article explains the core geometry and its safety implications.</p>"
  },
  {
    slug: "bench-protocol-overview",
    title: "Bench Test Protocol Overview",
    excerpt: "A high-level look at our test rigs and measurement approach.",
    date: "2025-09-06",
    tags: ["Bench Tests"],
    body: "<p>Placeholder post summarizing protocol, instruments, and metrics.</p>"
  }
];

export function getPost(slug:string){
  return posts.find(p => p.slug === slug) || null;
}
