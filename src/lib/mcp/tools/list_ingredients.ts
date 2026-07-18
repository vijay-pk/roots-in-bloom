import { defineTool } from "@lovable.dev/mcp-js";

const ingredients = [
  { name: "Wood-Pressed Coconut Oil", role: "The Base", benefit: "Deeply nourishes the scalp and strengthens hair from root to tip." },
  { name: "Amla", role: "Indian Gooseberry", benefit: "Rich in vitamin C — promotes hair growth and prevents premature greying." },
  { name: "Indigo", role: "Neela Amari", benefit: "Naturally enhances hair color and supports scalp health." },
  { name: "Brahmi", role: "Memory Herb", benefit: "Strengthens hair roots and helps reduce hair fall and stress-related damage." },
  { name: "Henna", role: "Mehendi", benefit: "Conditions the hair, adds natural shine, and improves texture." },
  { name: "Hibiscus", role: "Japa Pushpa", benefit: "Stimulates hair growth and helps prevent dandruff and hair thinning." },
  { name: "Tulsi", role: "Holy Basil", benefit: "Purifies the scalp and reduces itching and dandruff." },
  { name: "Bhringraj", role: "King of Herbs", benefit: "The legendary Ayurvedic tonic — promotes thick, healthy growth." },
  { name: "Aloe Vera", role: "Ghritakumari", benefit: "Soothes the scalp and hydrates dry, damaged hair." },
  { name: "Little Ironweed", role: "Sahadevi", benefit: "Supports scalp health and helps in reducing hair loss." },
  { name: "Curry Leaves", role: "Karivepaku", benefit: "Strengthens hair follicles and delays premature greying." },
  { name: "Vetiver", role: "Khus", benefit: "Cools and calms the scalp while improving overall hair vitality." },
];

export default defineTool({
  name: "list_ingredients",
  title: "List ingredients",
  description:
    "List all 12 Ayurvedic herbs used in Prakrithi Roots Herbal Hair Oil, with their traditional name/role and the benefit each brings to hair and scalp.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(ingredients, null, 2) }],
    structuredContent: { count: ingredients.length, ingredients },
  }),
});
