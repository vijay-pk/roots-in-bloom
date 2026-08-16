import { createFileRoute } from "@tanstack/react-router";
import PageLayout from "@/components/PageLayout";
import ResultsSection from "@/components/ResultsSection";

export const Route = createFileRoute("/results")({
  head: () => ({
    meta: [
      { title: "Real Before & After Results | Prakrithi Roots Herbal Hair Oil" },
      {
        name: "description",
        content:
          "See real customer transformation photos and before-and-after results using Prakrithi Roots Ayurvedic Herbal Hair Oil. Proven hair fall reduction and hairline regrowth.",
      },
      {
        property: "og:title",
        content: "Real Before & After Results | Prakrithi Roots",
      },
      {
        property: "og:description",
        content:
          "Real customer before and after results: 8-12 weeks of consistent Ayurvedic herbal hair oil application.",
      },
    ],
  }),
  component: ResultsPage,
});

function ResultsPage() {
  return (
    <PageLayout>
      <div className="pt-4">
        <ResultsSection />
      </div>
    </PageLayout>
  );
}
