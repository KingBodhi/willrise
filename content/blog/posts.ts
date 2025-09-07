export type Post = { slug:string; title:string; excerpt:string; date:string; tags:string[]; image?:string; body:string };
export const posts: Post[] = [
  { slug:"introducing-kinetic-fall-arrest", title:"Introducing the Kinetic Fall-Arrest System", excerpt:"Why posture and pressure distribution matter during and after a fall.", date:"2025-09-06", tags:["Research","Design"], image:"/images/blog/kinetic.svg", body:"<p>Placeholder post.</p>" },
  { slug:"bench-protocol-overview", title:"Bench Test Protocol Overview", excerpt:"A high-level look at our test rigs and measurement approach.", date:"2025-09-06", tags:["Bench Tests"], image:"/images/blog/bench.svg", body:"<p>Placeholder post.</p>" },
  { slug:"standards-landscape", title:"Standards Landscape for Fall Protection", excerpt:"Where ANSI, OSHA, CSA, EN and others intersect.", date:"2025-09-06", tags:["Standards"], image:"/images/blog/standards.svg", body:"<p>Placeholder post.</p>" }
];
export function getPost(slug:string){ return posts.find(p=>p.slug===slug) || null; }
