import { createFileRoute } from "@tanstack/react-router";
import PageLayout from "@/components/PageLayout";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageLayout>
      <div className="mx-auto max-w-3xl px-6 py-20 sm:py-32">
        <div className="mb-16 text-center">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-[color:var(--leaf)]">
            Our Heritage
          </span>
          <h1 className="mt-4 text-4xl font-medium text-foreground sm:text-5xl">
            About Prakrithi Roots
          </h1>
        </div>

        <div className="space-y-8 text-lg leading-relaxed text-muted-foreground sm:text-xl sm:leading-loose">
          <p>
            <strong className="font-semibold text-foreground">Prakrithi Roots</strong> is a premium Ayurvedic hair care brand dedicated to restoring healthy, strong, and naturally beautiful hair through the power of traditional herbal ingredients. Our signature wood-pressed coconut hair oil is carefully crafted using time-tested botanicals such as Amla, Bhringraj, Brahmi, Hibiscus, Curry Leaves, Tulsi, Aloe Vera, Indigo, Henna, Little Ironweed, and Vetiver to deeply nourish the scalp, strengthen hair from the roots, reduce hair fall, and promote healthy hair growth.
          </p>
          <p>
            We believe that true hair care begins with nature. Every bottle is made with carefully selected natural ingredients, free from harsh chemicals, to provide a safe and effective solution for everyday hair care. Inspired by the wisdom of Ayurveda and backed by quality craftsmanship, Prakrithi Roots is committed to helping you achieve thicker, healthier, shinier hair with every use.
          </p>
          <p>
            Whether you're looking to reduce hair fall, improve scalp health, repair damaged hair, or maintain naturally beautiful hair, Prakrithi Roots offers a trusted herbal solution that brings the goodness of nature directly to your home.
          </p>

          <div className="mt-16 rounded-[2rem] bg-[color:var(--leaf)] p-8 text-center text-[color:var(--cream)] shadow-bottle sm:p-12">
            <h3 className="text-2xl font-medium italic sm:text-3xl">
              "Prakrithi Roots – Rooted in Nature, Powered by Ayurveda."
            </h3>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
