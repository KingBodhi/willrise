
export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image?: string;
  body: string; // HTML
};

export const posts: Post[] = [
  {
    slug: "introducing-kinetic-fall-arrest",
    title: "Introducing the Kinetic Fall-Arrest System",
    date: "2025-09-06",
    excerpt: "Why posture and pressure distribution matter during and after a fall.",
    image: "/images/blog/kinetic.svg",
    body: `<p>Traditional harnesses arrest falls but can create hazardous strap pressures and compromised posture. The Kinetic Fall-Arrest System is designed to redistribute forces and preserve circulation so the wearer can breathe, signal, and be rescued faster.</p>`
  },
  {
    slug: "bench-protocol-overview",
    title: "Bench Test Protocol Overview",
    date: "2025-09-06",
    excerpt: "A high-level look at our test rigs and measurement approach.",
    image: "/images/blog/bench.svg",
    body: `<p>Our test benches measure strap loads, arterial occlusion risk, and time-to-discomfort during suspended scenarios. This post summarizes fixtures, sensors, and calibration logic we use to evaluate iterations consistently.</p>`
  },
  {
    slug: "standards-landscape",
    title: "Standards Landscape for Fall Protection",
    date: "2025-09-06",
    excerpt: "Where ANSI, OSHA, CSA, EN and others intersect.",
    image: "/images/blog/standards.svg",
    body: `<p>We map how ANSI/ASSP Z359, OSHA 1910/1926, CSA Z259, and EN 361 requirements inform our product goals and test boundaries. This overview orients new readers to the wider regulatory context.</p>`
  }
];

export function getPost(slug: string): Post | undefined {
  return posts.find(p => p.slug === slug);
}
