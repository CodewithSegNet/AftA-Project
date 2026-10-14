/**
 * Utility to generate Cloudinary URLs with responsive quality settings.
 * Supported quality tiers:
 * - max-width: 640px  => q_auto:low
 * - max-width: 1024px => q_auto:good
 * - max-width: 1920px => q_auto:best
 */

export const getCloudinaryUrl = (url, quality = "q_auto:best") => {
  if (!url || typeof url !== "string") return url;
  if (!url.includes("res.cloudinary.com")) return url;

  if (url.includes("q_auto")) {
    return url.replace(/q_auto(?::[a-z]+)?/, quality);
  }

  return url.replace(/\/upload\/(v\d+\/)/, `/upload/${quality},f_auto/$1`);
};

export const CLOUDINARY_BREAKPOINTS = [
  { media: "(max-width: 640px)", quality: "q_auto:low" },
  { media: "(max-width: 1024px)", quality: "q_auto:good" },
  { media: "(max-width: 1920px)", quality: "q_auto:best" },
];
