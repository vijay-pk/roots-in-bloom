import { defineMcp } from "@lovable.dev/mcp-js";
import getProduct from "./tools/get_product";
import listIngredients from "./tools/list_ingredients";
import listFaqs from "./tools/list_faqs";

export default defineMcp({
  name: "prakrithi-roots-mcp",
  title: "Prakrithi Roots MCP",
  version: "0.1.0",
  instructions:
    "Public tools for the Prakrithi Roots Ayurvedic Herbal Hair Oil website. Use `get_product` for product details and the Amazon buy link, `list_ingredients` for the 12 herbs and their benefits, and `list_faqs` for common customer questions. All data is public marketing content — no authentication required.",
  tools: [getProduct, listIngredients, listFaqs],
});
