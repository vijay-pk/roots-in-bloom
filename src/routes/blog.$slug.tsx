import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import PageLayout from "@/components/PageLayout";
import { getBlogPostBySlug, BLOG_POSTS } from "@/lib/blog-data";
import { PRODUCT_PRICE } from "@/lib/config";
import { Calendar, Clock, ArrowLeft, ArrowRight, Share2, Sparkles, CheckCircle2, Leaf } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getBlogPostBySlug(params.slug);
    if (!post) {
      throw notFound();
    }
    return { post };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    if (!post) return {};
    return {
      meta: [
        { title: `${post.seoTitle}` },
        { name: "description", content: post.seoDescription },
        { name: "keywords", content: post.keywords.join(", ") },
        { property: "og:title", content: post.seoTitle },
        { property: "og:description", content: post.seoDescription },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `https://prakrithi-roots.shop/blog/${post.slug}` },
      ],
    };
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const { post } = Route.useLoaderData();
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  // Find related articles (excluding the current one)
  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <PageLayout>
      <article className="mx-auto max-w-4xl px-6 py-12 sm:py-20">
        {/* Top Breadcrumb & Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 text-sm">
          <nav className="flex items-center gap-2 text-muted-foreground">
            <Link to="/" className="hover:text-[color:var(--leaf)] transition">Home</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-[color:var(--leaf)] transition">Blog</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate max-w-[200px] sm:max-w-xs">
              {post.title}
            </span>
          </nav>

          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[color:var(--leaf)] hover:underline"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Journal
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-4">
            <span className="rounded-full bg-[color:var(--leaf)]/15 text-[color:var(--leaf)] px-3 py-1 font-semibold uppercase tracking-wider">
              {post.category}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 text-[color:var(--leaf)]" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-[color:var(--leaf)]" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-medium tracking-tight text-foreground leading-[1.15]">
            {post.title}
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed border-l-2 border-[color:var(--leaf)] pl-4 italic">
            {post.excerpt}
          </p>

          <div className="mt-6 flex items-center justify-between pt-6 border-t border-border">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full gradient-leaf flex items-center justify-center text-[color:var(--cream)] shadow-sm">
                <Leaf className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs font-semibold text-foreground">{post.author}</p>
                <p className="text-[11px] text-muted-foreground">Handcrafted in Kerala, India</p>
              </div>
            </div>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 rounded-full glass px-3.5 py-1.5 text-xs font-medium text-foreground hover:text-[color:var(--leaf)] transition"
              title="Copy article link"
            >
              <Share2 className="h-3.5 w-3.5" />
              <span>{copied ? "Link Copied!" : "Share"}</span>
            </button>
          </div>
        </header>

        {/* Main Article Body */}
        <div className="prose prose-lg max-w-none text-foreground/90 space-y-10">
          {post.sections.map((section, idx) => (
            <section key={idx} className="space-y-4">
              {section.heading && (
                <h2 className="text-2xl sm:text-3xl font-medium text-foreground tracking-tight pt-2">
                  {section.heading}
                </h2>
              )}

              {section.body.map((paragraph, pIdx) => (
                <p key={pIdx} className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}

              {section.list && section.list.length > 0 && (
                <div className="rounded-2xl glass p-6 space-y-3 my-6 border border-border/60">
                  {section.list.map((item, lIdx) => {
                    const [titlePart, ...rest] = item.split(":");
                    return (
                      <div key={lIdx} className="flex items-start gap-3 text-sm sm:text-base text-foreground/90">
                        <CheckCircle2 className="h-5 w-5 text-[color:var(--leaf)] shrink-0 mt-0.5" />
                        <div>
                          {rest.length > 0 ? (
                            <>
                              <strong className="font-semibold text-foreground">{titlePart}:</strong>
                              <span className="text-muted-foreground">{rest.join(":")}</span>
                            </>
                          ) : (
                            <span className="text-muted-foreground">{item}</span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Embedded Botanical Product Callout */}
        <div className="mt-14 rounded-3xl gradient-leaf p-8 sm:p-10 text-[color:var(--cream)] shadow-bottle">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[color:var(--cream)]/80 mb-2">
                <Sparkles className="h-3.5 w-3.5" />
                Handcrafted Ayurvedic Formula
              </div>
              <h3 className="text-2xl sm:text-3xl font-medium">
                Experience the pure potency of this herb
              </h3>
              <p className="mt-2 text-white/85 text-sm sm:text-base leading-relaxed">
                Prakrithi Roots slow-infuses this botanical alongside 11 other traditional herbs in pure wood-pressed coconut oil.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-col gap-3 justify-center">
              <a
                href="https://www.amazon.in/Prakrithi-Roots-Herbal-Hair-Oil/dp/B0H74RD947"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[color:var(--cream)] px-6 py-3 text-center text-sm font-medium text-[color:var(--leaf)] shadow-soft transition hover:scale-105"
              >
                Buy on Amazon (₹{PRODUCT_PRICE}) →
              </a>
              <Link
                to="/product"
                className="rounded-full bg-white/15 backdrop-blur px-6 py-3 text-center text-sm font-medium text-white transition hover:bg-white/25"
              >
                View Full Ingredients
              </Link>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-20 pt-12 border-t border-border">
          <h3 className="text-2xl font-medium text-foreground mb-8">Related Hair Care Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedPosts.map((relPost) => (
              <div key={relPost.slug} className="glass p-6 rounded-2xl border border-border/50 hover:shadow-soft transition flex flex-col justify-between">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[color:var(--leaf)] font-medium block mb-2">
                    {relPost.category}
                  </span>
                  <h4 className="text-lg font-medium text-foreground line-clamp-2">
                    <Link to="/blog/$slug" params={{ slug: relPost.slug }} className="hover:text-[color:var(--leaf)] transition">
                      {relPost.title}
                    </Link>
                  </h4>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                    {relPost.excerpt}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{relPost.readTime}</span>
                  <Link
                    to="/blog/$slug"
                    params={{ slug: relPost.slug }}
                    className="text-xs font-semibold text-[color:var(--leaf)] inline-flex items-center gap-1 hover:translate-x-0.5 transition-transform"
                  >
                    Read Article <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
    </PageLayout>
  );
}
