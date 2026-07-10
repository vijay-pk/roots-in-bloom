import { createFileRoute } from "@tanstack/react-router";
import PageLayout from "@/components/PageLayout";

export const Route = createFileRoute("/refund-policy")({
  component: RefundPolicyPage,
});

function RefundPolicyPage() {
  return (
    <PageLayout>
      <div className="mx-auto max-w-4xl px-6 py-20">
        <h1 className="text-4xl font-semibold mb-10 text-center">Refund Policy</h1>
        <div className="prose prose-sm sm:prose lg:prose-lg mx-auto text-muted-foreground prose-headings:text-foreground prose-a:text-[color:var(--leaf)]">
          <h3>Returns</h3>
          <p>Due to the personal nature of our products, we do not accept returns once the product has been opened or used. However, if you receive a damaged or incorrect item, please contact us within 48 hours of delivery.</p>
          
          <h3>Refunds</h3>
          <p>If your return is accepted for a damaged or defective item, we will initiate a refund to your original method of payment. You will receive the credit within a certain amount of days, depending on your card issuer's policies.</p>
          
          <h3>Shipping for Returns</h3>
          <p>If a return is necessary due to a mistake on our part, we will cover the return shipping costs. Otherwise, you will be responsible for paying your own shipping costs for returning the item.</p>
        </div>
      </div>
    </PageLayout>
  );
}
