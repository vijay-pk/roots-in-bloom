import { createFileRoute, Link } from "@tanstack/react-router";
import PageLayout from "@/components/PageLayout";
import { BLOG_POSTS } from "@/lib/blog-data";
import { Calendar, Clock, ArrowRight, Sparkles, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Hair Care Blog & Ayurvedic Secrets | Prakrithi Roots" },
      {
        name: "description",
        content:
          "Explore expert guides and Ayurvedic articles on Amla, Bhringraj, Hibiscus, Brahmi, Curry Leaves, and proper herbal hair oil massage techniques.",
      },
      {
        property: "og:title",
        content: "Hair Care Blog & Ayurvedic Secrets | Prakrithi Roots",
      },
      {
        property: "og:description",
        content:
          "Evidence-based Ayurvedic hair care articles on natural ingredients, scalp health, and hair fall prevention.",
      },
    ],
  }),
  component: BlogListingPage,
});

function BlogListingPage() {
  const featuredPost = BLOG_POSTS[0];
  const otherPosts = BLOG_POSTS.slice(1);

  return (
    <PageLayout>
      <div className="mx-auto max-w-6xl px-6 py-12 sm:py-20">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-[color:var(--leaf)] mb-4">
            <BookOpen className="h-3.5 w-3.5" />
            Ayurvedic Hair Wisdom
          </div>
          <h1 className="text-4xl sm:text-5xl font-medium tracking-tight text-foreground">
            The Prakrithi Roots <span className="italic text-[color:var(--leaf)] font-display">Journal</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Time-tested herbal knowledge, ingredient deep-dives, and natural wellness tips to help you nurture stronger, healthier hair.
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="rounded-3xl glass p-8 sm:p-12 relative overflow-hidden border border-border/70 group hover:shadow-bottle transition-all">
              <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-[color:var(--leaf)]/10 blur-3xl -z-10" />
              <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground mb-4">
                <span className="rounded-full bg-[color:var(--leaf)]/15 text-[color:var(--leaf)] px-3 py-1 font-semibold uppercase tracking-wider">
                  Featured Article
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5 text-[color:var(--leaf)]" />
                  {featuredPost.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-[color:var(--leaf)]" />
                  {featuredPost.readTime}
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-medium text-foreground group-hover:text-[color:var(--leaf)] transition">
                <Link to="/blog/$slug" params={{ slug: featuredPost.slug }}>
                  {featuredPost.title}
                </Link>
              </h2>

              <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl">
                {featuredPost.excerpt}
              </p>

              <div className="mt-6 flex items-center gap-4">
                <Link
                  to="/blog/$slug"
                  params={{ slug: featuredPost.slug }}
                  className="inline-flex items-center gap-2 rounded-full gradient-leaf px-6 py-3 text-sm font-medium text-[color:var(--cream)] shadow-sm transition hover:scale-105"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}

        {/* Grid of Other Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherPosts.map((post, idx) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="rounded-3xl glass p-7 flex flex-col justify-between hover:shadow-soft transition border border-border/50 group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <span className="rounded-full bg-background/80 px-3 py-1 font-medium text-foreground border border-border/60">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3 text-[color:var(--leaf)]" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-medium text-foreground group-hover:text-[color:var(--leaf)] transition line-clamp-2 leading-snug">
                  <Link to="/blog/$slug" params={{ slug: post.slug }}>
                    {post.title}
                  </Link>
                </h3>

                <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between">
                <span className="text-xs text-muted-foreground">{post.date}</span>
                <Link
                  to="/blog/$slug"
                  params={{ slug: post.slug }}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[color:var(--leaf)] group-hover:translate-x-1 transition-transform"
                >
                  <span>Read More</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-20 rounded-3xl gradient-leaf p-8 sm:p-12 text-[color:var(--cream)] text-center shadow-bottle">
          <div className="max-w-2xl mx-auto">
            <Sparkles className="h-8 w-8 mx-auto mb-3 opacity-90" />
            <h3 className="text-2xl sm:text-3xl font-medium">Ready to treat your hair with these herbs?</h3>
            <p className="mt-3 text-white/80 text-sm sm:text-base">
              Prakrithi Roots combines Amla, Hibiscus, Bhringraj, Brahmi, and Curry Leaves slow-infused in pure cold-pressed coconut oil.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <a
                href="https://www.amazon.in/Prakrithi-Roots-Herbal-Hair-Oil/dp/B0H74RD947"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[color:var(--cream)] px-7 py-3 text-sm font-medium text-[color:var(--leaf)] shadow-soft transition hover:scale-105"
              >
                Shop on Amazon →
              </a>
              <Link
                to="/product"
                className="rounded-full bg-white/15 backdrop-blur px-6 py-3 text-sm font-medium text-white transition hover:bg-white/25"
              >
                View Product Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
