import { createFileRoute } from "@tanstack/react-router";
import PageLayout from "@/components/PageLayout";

export const Route = createFileRoute("/blogs")({
  component: BlogsPage,
});

function BlogsPage() {
  const articles = [
    {
      title: "How to Use Bhringraj and Amla for Hair Growth",
      date: "October 12, 2023",
      content: (
        <>
          <p className="mb-4">
            For centuries, Ayurveda has revered <strong>Bhringraj</strong> and <strong>Amla</strong> as the ultimate natural remedies for hair fall and slow growth. Often called the "King of Herbs" for hair, Bhringraj penetrates deep into the scalp to stimulate follicles, while Amla (Indian Gooseberry) is packed with Vitamin C and antioxidants that strengthen the hair shaft.
          </p>
          <p className="mb-4">
            When looking for the best ayurvedic hair oil for hair growth, the combination of these two ingredients is unmatched. Amla prevents premature greying and adds a natural shine, while Bhringraj improves blood circulation to the roots.
          </p>
          <p>
            <strong>How to use:</strong> Gently massage Prakrithi Roots herbal hair oil into your scalp 2-3 times a week. Leave it on for at least an hour before washing for optimal absorption.
          </p>
        </>
      ),
    },
    {
      title: "Why Switch to Paraben-Free and Silicone-Free Hair Care?",
      date: "November 5, 2023",
      content: (
        <>
          <p className="mb-4">
            The hair care aisle is filled with products that promise instant shine. Unfortunately, most of this shine comes from <strong>silicones</strong>—synthetic plastics that coat your hair, preventing moisture from entering and eventually leading to severe dryness and breakage.
          </p>
          <p className="mb-4">
            Switching to a <strong>chemical-free hair oil</strong> and a <strong>paraben-free</strong> routine ensures your scalp can breathe. Parabens are artificial preservatives linked to scalp irritation and deeper health concerns. 
          </p>
          <p>
            At Prakrithi Roots, we believe in 100% natural care. Our oil contains zero silicones, mineral oils, or parabens. It relies solely on the natural preserving properties of pure coconut oil and dried herbs, giving you true, lasting hair health rather than a temporary synthetic gloss.
          </p>
        </>
      ),
    },
    {
      title: "The Traditional Kerala Herbal Hair Oil Recipe",
      date: "December 1, 2023",
      content: (
        <>
          <p className="mb-4">
            There is a reason Kerala is famous for its lush, long hair. The secret lies in the traditional <strong>Kerala herbal hair oil recipe</strong>, a time-tested formulation passed down through generations.
          </p>
          <p className="mb-4">
            Unlike factory-made products, our Ayurvedic hair oil is handcrafted in small batches. We use pure, wood-pressed coconut oil as a base. Into this, we slow-infuse 12 potent herbs including fresh Hibiscus flowers, Tulsi leaves, and Aloe Vera over gentle heat. This slow extraction process ensures that every drop of oil is saturated with the medicinal properties of the herbs.
          </p>
          <p>
            This meticulous process creates a rich, dark, and highly potent pure coconut hair oil that acts as a comprehensive treatment for dandruff, hair fall, and thinning hair.
          </p>
        </>
      ),
    },
  ];

  return (
    <PageLayout>
      <div className="mx-auto max-w-4xl px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-semibold mb-6">Our Blog</h1>
          <p className="text-lg text-muted-foreground">
            Discover Ayurvedic secrets, hair care tips, and the science behind our ingredients.
          </p>
        </div>
        
        <div className="space-y-12">
          {articles.map((article, index) => (
            <article key={index} className="glass p-8 md:p-12 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[color:var(--leaf)] to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
              <header className="mb-6">
                <span className="text-xs uppercase tracking-widest text-[color:var(--leaf)] font-medium mb-2 block">
                  {article.date}
                </span>
                <h2 className="text-2xl md:text-3xl font-medium text-foreground">
                  {article.title}
                </h2>
              </header>
              <div className="text-muted-foreground leading-relaxed prose prose-p:text-muted-foreground prose-strong:text-foreground">
                {article.content}
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="/" className="inline-block rounded-full gradient-leaf px-8 py-3 text-sm font-medium text-[color:var(--cream)] transition hover:scale-105 shadow-soft">
            Shop Prakrithi Roots Oil
          </a>
        </div>
      </div>
    </PageLayout>
  );
}
