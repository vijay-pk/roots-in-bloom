import { createFileRoute } from "@tanstack/react-router";
import PageLayout from "@/components/PageLayout";
import Ingredients from "@/components/Ingredients";

export const Route = createFileRoute("/ingredients")({
  head: () => ({
    meta: [
      { title: "12 Potent Ayurvedic Ingredients | Prakrithi Roots Hair Oil" },
      {
        name: "description",
        content:
          "Explore the 12 handpicked Ayurvedic ingredients in Prakrithi Roots Hair Oil: Amla, Bhringraj, Tulsi, Hibiscus, Aloe Vera, and pure cold-pressed coconut oil.",
      },
    ],
  }),
  component: IngredientsPage,
});

function IngredientsPage() {
  return (
    <PageLayout>
      <div className="pt-10">
        <Ingredients />
      </div>
    </PageLayout>
  );
}
