import { createFileRoute } from "@tanstack/react-router";
import PageLayout from "@/components/PageLayout";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <PageLayout>
      <div className="mx-auto max-w-4xl px-6 py-20">
        <h1 className="text-4xl font-semibold mb-10 text-center">Privacy Policy</h1>
        <div className="prose prose-sm sm:prose lg:prose-lg mx-auto text-muted-foreground prose-headings:text-foreground prose-a:text-[color:var(--leaf)]">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>At Prakrithi Roots, we are committed to protecting your privacy. This policy outlines how we collect, use, and safeguard your information when you visit our website.</p>
          
          <h3>Information We Collect</h3>
          <p>We may collect personal information such as your name, email address, shipping address, and payment details when you place an order or contact us.</p>
          
          <h3>How We Use Your Information</h3>
          <ul>
            <li>To process and fulfill your orders.</li>
            <li>To communicate with you regarding your order status.</li>
            <li>To improve our website and customer service.</li>
          </ul>
          
          <h3>Data Security</h3>
          <p>We implement standard security measures to maintain the safety of your personal information. Your payment information is securely processed through our trusted payment gateways and is not stored on our servers.</p>
          
          <h3>Contact Us</h3>
          <p>If you have any questions about this Privacy Policy, please contact us at hello@prakrithi-roots.shop.</p>
        </div>
      </div>
    </PageLayout>
  );
}
