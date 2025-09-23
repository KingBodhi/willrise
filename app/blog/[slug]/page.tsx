import Section from "../../../components/Section";
import { getPost } from "../../../content/blog/posts";
import Link from "next/link";

export default function Page({ params }:{ params:{ slug:string }}){
  const post = getPost(params.slug);
  if(!post) {
    return (
      <div className="bg-gradient-to-br from-neutral-50 to-white min-h-screen">
        <Section className="py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-display text-4xl font-bold text-primary-600 mb-4">Article Not Found</h1>
            <p className="text-neutral-600 mb-8">The article you're looking for doesn't exist or has been moved.</p>
            <Link href="/blog" className="btn-primary">
              Back to Blog
            </Link>
          </div>
        </Section>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-neutral-50 to-white min-h-screen">
      <Section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="mb-8">
            <div className="flex items-center space-x-2 text-sm">
              <Link href="/" className="text-neutral-500 hover:text-primary-600 transition-colors">Home</Link>
              <svg className="w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <Link href="/blog" className="text-neutral-500 hover:text-primary-600 transition-colors">Blog</Link>
              <svg className="w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-neutral-900 font-medium">{post.title}</span>
            </div>
          </nav>

          <article className="card overflow-hidden">
            {/* Hero Image */}
            {post.image && (
              <div className="aspect-[21/9] bg-gradient-to-br from-primary-50 to-primary-100 relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            )}

            {/* Article Content */}
            <div className="p-8 lg:p-12">
              {/* Meta Info */}
              <div className="flex items-center gap-4 mb-6">
                {post.category && (
                  <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                )}
                {post.readTime && (
                  <span className="text-neutral-500 text-sm">{post.readTime}</span>
                )}
                {post.date && (
                  <span className="text-neutral-500 text-sm">{post.date}</span>
                )}
              </div>

              {/* Title */}
              <h1 className="font-display text-4xl lg:text-5xl font-bold text-primary-600 mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Excerpt */}
              {post.excerpt && (
                <p className="text-xl text-neutral-700 mb-8 leading-relaxed border-l-4 border-accent-500 pl-6">
                  {post.excerpt}
                </p>
              )}

              {/* Article Body */}
              <div className="prose prose-lg prose-neutral max-w-none
                prose-headings:font-display prose-headings:text-primary-600
                prose-p:text-neutral-700 prose-p:leading-relaxed
                prose-a:text-accent-500 prose-a:font-semibold hover:prose-a:text-accent-600
                prose-strong:text-primary-600 prose-strong:font-semibold
                prose-ul:text-neutral-700 prose-ol:text-neutral-700
                prose-blockquote:border-accent-500 prose-blockquote:text-primary-600
                prose-code:bg-neutral-100 prose-code:text-accent-600 prose-code:px-2 prose-code:py-1 prose-code:rounded
              "
                dangerouslySetInnerHTML={{ __html: post.body }}
              />
            </div>
          </article>

          {/* Back to Blog */}
          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-accent-500 hover:text-accent-600 font-semibold transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to All Articles
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
