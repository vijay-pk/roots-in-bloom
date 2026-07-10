import { createFileRoute } from "@tanstack/react-router";
import PageLayout from "@/components/PageLayout";
import FAQ from "@/components/FAQ";

export const Route = createFileRoute("/faq")({
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
