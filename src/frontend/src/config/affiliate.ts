// Amazon affiliate configuration
// Replace 'youraffiliateID-20' with your actual Amazon Associates tag
export const AMAZON_AFFILIATE_TAG = "youraffiliateID-20";

/**
 * Adds affiliate tag to Amazon URL
 * @param baseUrl - The base Amazon product URL
 * @returns URL with affiliate tag appended
 */
export function getAffiliateUrl(baseUrl: string): string {
  try {
    const url = new URL(baseUrl);
    url.searchParams.set("tag", AMAZON_AFFILIATE_TAG);
    return url.toString();
  } catch {
    // If URL parsing fails, append tag as query parameter
    const separator = baseUrl.includes("?") ? "&" : "?";
    return `${baseUrl}${separator}tag=${AMAZON_AFFILIATE_TAG}`;
  }
}
