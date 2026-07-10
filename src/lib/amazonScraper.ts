import { createServerFn } from "@tanstack/react-start";

export const getAmazonPrice = createServerFn({ method: "GET" }).handler(async () => {
  const fallbackPrice = "299";
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 800);

    const response = await fetch("https://www.amazon.in/Prakrithi-Roots-Herbal-Hair-Oil/dp/B0H74RD947", {
      signal: controller.signal,
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
        "Accept-Language": "en-US,en;q=0.9",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
      },
      next: { revalidate: 3600 }
    } as any);

    clearTimeout(timeoutId);

    if (!response.ok) {
      console.warn("Amazon request failed with status:", response.status);
      return fallbackPrice;
    }

    const html = await response.text();
    
    // Look for standard Amazon price span
    const match = html.match(/<span class="a-price-whole">([0-9,]+)[^<]*<\/span>/);
    if (match && match[1]) {
      const cleanPrice = match[1].replace(/,/g, '');
      return cleanPrice || fallbackPrice;
    }

    return fallbackPrice;
  } catch (error) {
    console.error("Amazon scraper error:", error);
    return fallbackPrice;
  }
});
