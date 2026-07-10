import { createFileRoute } from "@tanstack/react-router";
import PageLayout from "@/components/PageLayout";
import Ingredients from "@/components/Ingredients";

export const Route = createFileRoute("/ingredients")({
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
