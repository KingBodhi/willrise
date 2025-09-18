import Section from "../../components/Section";
import Link from "next/link";

const blogPosts = [
  {
    title: "Introducing the Kinetic Fall-Arrest System",
    excerpt: "Why posture and pressure distribution matter during and after a fall. Learn about the breakthrough technology behind our patent-pending harness design.",
    slug: "introducing-kinetic-fall-arrest",
    category: "Technology",
    readTime: "5 min read",
    image: "/images/blog/kinetic.svg",
    featured: true
  },
  {
    title: "Understanding OSHA Fall Protection Requirements",
    excerpt: "A comprehensive guide to OSHA 1926 and 1910 fall protection standards for construction and general industry applications.",
    slug: "osha-fall-protection-guide",
    category: "Compliance",
    readTime: "8 min read", 
    image: "/images/blog/osha-guide.svg",
    featured: false
  },
  {
    title: "Bench Test Protocol Overview",
    excerpt: "A high-level look at our test rigs and measurement approach. See how we validate safety performance under controlled conditions.",
    slug: "bench-protocol-overview",
    category: "Testing",
    readTime: "6 min read",
    image: "/images/blog/bench.svg",
    featured: false
  },
  {
    title: "Standards Landscape for Fall Protection", 
    excerpt: "Where ANSI, OSHA, CSA, EN and others intersect. Navigate the complex world of international safety standards.",
    slug: "standards-landscape",
    category: "Standards",
    readTime: "7 min read",
    image: "/images/blog/standards.svg",
    featured: false
  },
  {
    title: "Suspension Trauma: The Hidden Killer",
    excerpt: "Understanding the physiological effects of prolonged suspension and how modern harness design can prevent injury and death.",
    slug: "suspension-trauma-prevention",
    category: "Safety Science",
    readTime: "10 min read",
    image: "/images/blog/suspension-trauma.svg",
    featured: false
  },
  {
    title: "Job Site Safety: Pre-Use Inspection Checklist",
    excerpt: "Essential daily inspection procedures for fall protection equipment. Ensure your gear is ready when you need it most.",
    slug: "pre-use-inspection-checklist",
    category: "Best Practices",
    readTime: "4 min read",
    image: "/images/blog/inspection.svg",
    featured: false
  }
];

const categories = ["All", "Technology", "Compliance", "Testing", "Standards", "Safety Science", "Best Practices"];

export default function BlogPage() {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="bg-gradient-to-br from-neutral-50 to-white min-h-screen">
      {/* Hero Section */}
      <Section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span className="text-lg">📚</span>
              Safety Knowledge Hub
            </div>
            
            <h1 className="font-display text-display-1 font-bold text-primary-600 mb-4">
              From the Lab
            </h1>
            <p className="text-body-lg text-neutral-600 max-w-3xl mx-auto">
              Latest research, insights, and best practices in fall protection technology, 
              safety standards, and workplace safety from our engineering team.
            </p>
          </div>

          {/* Featured Article */}
          {featuredPost && (
            <div className="mb-16">
              <div className="text-center mb-8">
                <h2 className="font-display text-2xl font-bold text-primary-600">Featured Article</h2>
              </div>
              
              <Link href={`/blog/${featuredPost.slug}`} className="group card overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative aspect-[16/9] lg:aspect-auto bg-gradient-to-br from-primary-50 to-primary-100">
                    <img 
                      src={featuredPost.image} 
                      alt={featuredPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      Featured
                    </div>
                  </div>
                  
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold">
                        {featuredPost.category}
                      </span>
                      <span className="text-neutral-500 text-sm">{featuredPost.readTime}</span>
                    </div>
                    
                    <h3 className="font-display text-2xl font-bold text-primary-600 mb-4 group-hover:text-accent-500 transition-colors">
                      {featuredPost.title}
                    </h3>
                    <p className="text-neutral-600 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                    
                    <div className="flex items-center text-accent-500 font-semibold">
                      Read Full Article
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button 
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                  category === "All" 
                    ? "bg-primary-600 text-white" 
                    : "bg-neutral-200 text-neutral-700 hover:bg-neutral-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Article Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <Link key={index} href={`/blog/${post.slug}`} className="group card">
                <div className="aspect-[16/9] bg-gradient-to-br from-neutral-100 to-neutral-200 relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-neutral-100 text-neutral-700 px-2 py-1 rounded text-xs font-semibold">
                      {post.category}
                    </span>
                    <span className="text-neutral-500 text-xs">{post.readTime}</span>
                  </div>
                  
                  <h3 className="font-display font-bold text-primary-600 mb-2 group-hover:text-accent-500 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-neutral-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  
                  <div className="flex items-center text-accent-500 font-semibold text-sm">
                    Read Article
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 text-center">
            <div className="card p-8 max-w-2xl mx-auto">
              <h3 className="font-display text-2xl font-bold text-primary-600 mb-4">
                Stay Updated on Safety Innovation
              </h3>
              <p className="text-neutral-600 mb-6">
                Get the latest articles, research findings, and safety insights delivered to your inbox monthly.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-1 input-field"
                />
                <button className="btn-primary px-8 py-3">
                  Subscribe
                </button>
              </div>
              
              <p className="text-xs text-neutral-500 mt-3">
                No spam, unsubscribe anytime. We respect your privacy.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}