import { createFileRoute } from "@tanstack/react-router";
import PageLayout from "@/components/PageLayout";
import Story from "@/components/Story";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageLayout>
      <Story />
    </PageLayout>
  );
}
