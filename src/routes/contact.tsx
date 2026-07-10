import { createFileRoute } from "@tanstack/react-router";
import PageLayout from "@/components/PageLayout";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageLayout>
      <div className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h1 className="text-4xl font-semibold mb-6">Contact Us</h1>
        <p className="text-lg text-muted-foreground mb-12">
          We'd love to hear from you! Whether you have a question about our oils, shipping, or just want to share your hair journey.
        </p>
        <div className="glass p-8 rounded-2xl inline-block text-left">
          <h2 className="text-xl font-medium mb-4 text-[color:var(--leaf)]">Reach Out Directly</h2>
          <p className="mb-2"><strong>Email:</strong> hello@prakrithi-roots.shop</p>
          <p><strong>Address:</strong> Kerala, India</p>
        </div>
      </div>
    </PageLayout>
  );
}
