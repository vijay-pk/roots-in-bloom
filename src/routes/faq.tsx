import { createFileRoute } from "@tanstack/react-router";
import PageLayout from "@/components/PageLayout";
import FAQ from "@/components/FAQ";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Frequently Asked Questions | Prakrithi Roots Hair Oil" },
      {
        name: "description",
        content:
          "Find answers to common questions about Prakrithi Roots Ayurvedic Herbal Hair Oil: ingredients, usage instructions, hair fall recovery, and order information.",
      },
    ],
  }),
  component: FAQPage,
});

function FAQPage() {
  return (
    <PageLayout>
      <div className="pt-10">
        <FAQ />
      </div>
    </PageLayout>
  );
}
