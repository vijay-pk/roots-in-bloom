import { createFileRoute } from "@tanstack/react-router";
import PageLayout from "@/components/PageLayout";

export const Route = createFileRoute("/how-to-use")({
  component: HowToUsePage,
});

function HowToUsePage() {
  return (
    <PageLayout>
      <div className="mx-auto max-w-4xl px-6 py-20">
        <h1 className="text-4xl font-semibold mb-10 text-center">How to Use</h1>
        <div className="space-y-8">
          <div className="glass p-6 rounded-2xl">
            <h3 className="text-xl font-medium mb-2 text-[color:var(--leaf)]">Step 1: Warm the Oil (Optional but Recommended)</h3>
            <p className="text-muted-foreground">Slightly warm the oil using a double boiler method for better absorption. Do not heat directly over a flame.</p>
          </div>
          <div className="glass p-6 rounded-2xl">
            <h3 className="text-xl font-medium mb-2 text-[color:var(--leaf)]">Step 2: Massage into Scalp</h3>
            <p className="text-muted-foreground">Part your hair and apply the oil directly to the scalp. Gently massage with your fingertips in circular motions for 5-10 minutes to stimulate blood flow.</p>
          </div>
          <div className="glass p-6 rounded-2xl">
            <h3 className="text-xl font-medium mb-2 text-[color:var(--leaf)]">Step 3: Rest and Wash</h3>
            <p className="text-muted-foreground">Leave the oil in for at least 30 minutes, or overnight for deep conditioning. Wash off with a mild, sulphate-free shampoo.</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
