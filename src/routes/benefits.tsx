import { createFileRoute } from "@tanstack/react-router";
import PageLayout from "@/components/PageLayout";
import Benefits from "@/components/Benefits";

export const Route = createFileRoute("/benefits")({
  head: () => ({
    meta: [
      { title: "Benefits of Prakrithi Roots Herbal Hair Oil | Natural Hair Growth" },
      {
        name: "description",
        content:
          "Discover the powerful benefits of Prakrithi Roots Ayurvedic Hair Oil: stops hair fall, promotes thick root growth, prevents dandruff, and calms scalp stress naturally.",
      },
    ],
  }),
  component: BenefitsPage,
});

function BenefitsPage() {
  return (
    <PageLayout>
      <div className="pt-10">
        <Benefits />
      </div>
    </PageLayout>
  );
}
