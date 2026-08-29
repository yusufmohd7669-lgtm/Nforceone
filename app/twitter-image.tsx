// Twitter/X does not fall back to the Open Graph image file convention, so the
// same card is re-exported here. Keeps one source of truth for the artwork.
export { default, alt, size, contentType } from "./opengraph-image";
