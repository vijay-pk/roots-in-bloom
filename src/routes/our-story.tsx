import { createFileRoute } from "@tanstack/react-router";
import PageLayout from "@/components/PageLayout";

export const Route = createFileRoute("/our-story")({
  head: () => ({
    meta: [
      { title: "Our Story | Prakrithi Roots Ayurvedic Herbal Hair Oil" },
      {
        name: "description",
        content:
          "Discover the personal healing journey behind Prakrithi Roots Herbal Hair Oil. Handcrafted in Kerala using traditional Ayurvedic botanicals.",
      },
    ],
  }),
  component: OurStoryPage,
});

function OurStoryPage() {
  return (
    <PageLayout>
      <div className="mx-auto max-w-3xl px-6 py-20 sm:py-32">
        <div className="mb-16 text-center">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-[color:var(--leaf)]">
            Our Journey
          </span>
          <h1 className="mt-4 text-4xl font-medium text-foreground sm:text-5xl">
            A Personal Story of Healing
          </h1>
        </div>

        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground sm:text-xl sm:leading-loose">
          <p>
            <strong className="font-semibold text-foreground">Prakrithi Roots</strong> was born from a deeply personal journey.
          </p>
          <p>
            A few years ago, I was diagnosed with endometriosis. The condition itself, along with the hormonal changes and treatment, took a significant toll on my body—especially my hair. I experienced severe hair fall, thinning, loss of volume, a receding hairline, and eventually developed a round bald patch near the front of my scalp. It was one of the most emotionally challenging experiences I had ever faced.
          </p>
          <p>
            I consulted a dermatologist, who prescribed a topical treatment and a month-long course of medication. The doctor also explained that if there was no improvement, injections might be the next step. While I was able to purchase the topical gel, the medication was beyond what I could afford at the time, and I could only complete one week's treatment.
          </p>
          <p>
            For a while, I didn't notice much change. Later, I saw a few tiny new hairs appearing in the affected area, but the gel soon ran out and I couldn't continue the treatment. The bald patch remained, and I felt increasingly discouraged.
          </p>
          <p>
            Around that time, we had a family function approaching. I remember feeling anxious because I couldn't even style my hair comfortably. That moment became the turning point.
          </p>
          <p>
            I began researching traditional Ayurvedic herbs that have long been used in hair care. After spending countless hours learning about natural ingredients and traditional preparation methods, I carefully created my own herbal hair oil at home.
          </p>
          <p>
            Within days of using it, I personally noticed that my hair fall had started to reduce. My husband also began using the oil and shared a similar experience. Encouraged by these early results, we both continued using it consistently.
          </p>
          <p>
            Over time, I noticed tiny new hairs appearing in the area where I had previously lost hair. Gradually, my hair felt thicker, healthier, and longer. By the time our family function arrived, I felt confident enough to style my hair again. My husband also noticed reduced hair fall and new baby hairs around his hairline.
          </p>
          <p>
            That experience gave me hope. I thought to myself, "If creating this herbal oil has been such a meaningful part of my own journey, perhaps others may appreciate it too."
          </p>
          <p>
            At the same time, my health condition made it difficult for me to pursue regular employment. With the support and encouragement of my husband, I decided to take a different path.
          </p>
          <p>
            I first shared the hair oil with family members and close friends. Their positive feedback gave me the confidence to move forward. I then opened an Amazon Seller account and managed every step myself—from product registration and listing to packaging and label design.
          </p>
          <p>
            That is how <strong className="font-semibold text-foreground">Prakrithi Roots Herbal Hair Oil</strong> came into existence. Today, Prakrithi Roots is much more than a product. It represents resilience, hope, and the belief that difficult times can lead to meaningful new beginnings.
          </p>
          <p>
            Every bottle is prepared with care, inspired by traditional herbal wisdom and created with the same dedication that began in my own home. Thank you for being part of our journey.
          </p>
          
          <div className="mt-12 rounded-[2rem] bg-[color:var(--leaf)] p-8 text-center text-[color:var(--cream)] shadow-bottle">
            <h3 className="text-2xl font-medium italic sm:text-3xl">
              "Rooted in Nature, Powered by Ayurveda."
            </h3>
          </div>

          <p className="mt-8 text-sm text-muted-foreground/70 italic">
            Disclaimer: This story reflects my personal experience. Individual results may vary. Prakrithi Roots Herbal Hair Oil is not intended to diagnose, treat, cure, or prevent any disease. If you have a medical condition or significant hair loss, please consult a qualified healthcare professional.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
