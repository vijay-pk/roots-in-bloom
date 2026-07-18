import { defineTool } from "@lovable.dev/mcp-js";

const faqs = [
  { question: "How often should I use Prakrithi Roots?", answer: "Two to three times a week. Apply on scalp, massage for 2–3 minutes, leave for 30 minutes and wash off with a mild shampoo." },
  { question: "Is it suitable for all hair types?", answer: "Yes. The formula is balanced for men and women, curly to straight, oily to dry scalps." },
  { question: "When will I see results?", answer: "Most customers notice reduced hair fall and a calmer scalp within 3–4 weeks of consistent use." },
  { question: "What makes this the best Ayurvedic hair oil for hair fall?", answer: "Our traditional slow-infusion process ensures the active compounds from Amla, Bhringraj, and Hibiscus are fully extracted into pure wood-pressed coconut oil, creating a potent natural remedy for hair fall and scalp health." },
  { question: "Does it contain any chemicals or artificial fragrances?", answer: "No. Prakrithi Roots is a 100% natural, chemical-free hair oil. No parabens, sulfates, silicones, mineral oil, or synthetic fragrances." },
  { question: "Can I use this oil if I have dandruff?", answer: "Yes, ingredients like Aloe Vera and Tulsi possess natural antibacterial and soothing properties that help maintain a healthy, flake-free scalp." },
  { question: "Is it safe for chemically treated or colored hair?", answer: "Yes, being 100% natural and free from harsh chemicals, it is perfectly safe to use on colored or treated hair." },
  { question: "What's inside — and what's not?", answer: "Coconut oil, Amla, Indigo, Bhringraj, Brahmi, Hibiscus, Aloe Vera, Henna, Tulsi, Curry leaves & other natural herbs. No parabens, no silicones, no mineral oil, no artificial colors." },
  { question: "Where is it made?", answer: "Slow-infused and bottled by Loventra in Calicut, Kerala, India." },
];

export default defineTool({
  name: "list_faqs",
  title: "List FAQs",
  description:
    "Return the public FAQs for Prakrithi Roots Herbal Hair Oil — usage, suitability, ingredients, timeline, and origin.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(faqs, null, 2) }],
    structuredContent: { count: faqs.length, faqs },
  }),
});
