import { createFileRoute } from "@tanstack/react-router";
import PageLayout from "@/components/PageLayout";

export const Route = createFileRoute("/shipping-policy")({
  component: ShippingPolicyPage,
});

function ShippingPolicyPage() {
  return (
    <PageLayout>
      <div className="mx-auto max-w-4xl px-6 py-20">
        <h1 className="text-4xl font-semibold mb-10 text-center">Shipping Policy</h1>
        <div className="prose prose-sm sm:prose lg:prose-lg mx-auto text-muted-foreground prose-headings:text-foreground prose-a:text-[color:var(--leaf)]">
          <h3>Processing Time</h3>
          <p>All orders are processed within 1 to 2 business days (excluding weekends and holidays) after receiving your order confirmation email. You will receive another notification when your order has shipped.</p>
          
          <h3>Domestic Shipping Rates and Estimates</h3>
          <p>Shipping charges for your order will be calculated and displayed at checkout. We currently offer standard shipping across India, which typically takes 3-5 business days depending on your location.</p>
          
          <h3>How do I check the status of my order?</h3>
          <p>When your order has shipped, you will receive an email notification from us which will include a tracking number you can use to check its status. Please allow 48 hours for the tracking information to become available.</p>
        </div>
      </div>
    </PageLayout>
  );
}
