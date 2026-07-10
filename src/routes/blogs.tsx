import { createFileRoute } from "@tanstack/react-router";
import PageLayout from "@/components/PageLayout";

export const Route = createFileRoute("/blogs")({
  component: BlogsPage,
});

function BlogsPage() {
  return (
    <PageLayout>
      <div className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h1 className="text-4xl font-semibold mb-6">Our Blog</h1>
        <p className="text-lg text-muted-foreground mb-12">
          Discover Ayurvedic secrets, hair care tips, and the science behind our ingredients.
        </p>
        <div className="glass p-12 rounded-2xl">
          <h2 className="text-2xl font-medium mb-4 text-[color:var(--leaf)]">Coming Soon!</h2>
          <p className="text-muted-foreground mb-8">We are currently writing beautiful articles for you. Check back soon for our first post!</p>
          <a href="/benefits" className="inline-block rounded-full gradient-leaf px-8 py-3 text-sm font-medium text-[color:var(--cream)] transition hover:scale-105 shadow-soft">
            Discover our Benefits
          </a>
        </div>
      </div>
    </PageLayout>
  );
}
