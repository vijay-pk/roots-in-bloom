import { createFileRoute } from "@tanstack/react-router";
import PageLayout from "@/components/PageLayout";
import Benefits from "@/components/Benefits";

export const Route = createFileRoute("/benefits")({
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
