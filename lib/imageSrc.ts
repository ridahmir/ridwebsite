/**
 * Next/Image skips optimization for SVGs (security + no raster gains).
 */
export const shouldUnoptimizeImageSrc = (src: string): boolean => {
  const path = src.split("?")[0] ?? src;
  return path.endsWith(".svg");
};
