import type { NextConfig } from "next";

const repo = "Round1_praavalegal_task";
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",              // <-- creates /out with index.html
  trailingSlash: true,
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
  images: { unoptimized: true }, // required for static hosting
};

export default nextConfig;