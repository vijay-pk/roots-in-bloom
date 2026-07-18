import { defineTool } from "@lovable.dev/mcp-js";
import { PRODUCT_PRICE } from "../../config";

export default defineTool({
  name: "get_product",
  title: "Get product",
  description:
    "Return public details about the Prakrithi Roots Ayurvedic Herbal Hair Oil, including name, price in INR, size, description, key benefits, and the Amazon India buy link.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const product = {
      name: "Prakrithi Roots Ayurvedic Herbal Hair Oil",
      size: "100 ml",
      priceInr: Number(PRODUCT_PRICE),
      currency: "INR",
      origin: "Handcrafted in Calicut, Kerala, India",
      description:
        "100% natural Ayurvedic hair oil slow-infused with 12 herbs including Amla, Tulsi, Aloe Vera, Hibiscus and Bhringraj in pure wood-pressed coconut oil.",
      benefits: [
        "Reduces hair fall",
        "Promotes hair growth",
        "Soothes and cools the scalp",
        "Prevents dandruff",
        "Delays premature greying",
      ],
      certifications: ["No parabens", "No silicones", "No mineral oil", "Cruelty free"],
      buyUrl: "https://www.amazon.in/Prakrithi-Roots-Herbal-Hair-Oil/dp/B0H74RD947",
      website: "https://prakrithi-roots.shop",
      contactEmail: "prakrithiroots@gmail.com",
    };
    return {
      content: [{ type: "text", text: JSON.stringify(product, null, 2) }],
      structuredContent: product,
    };
  },
});
