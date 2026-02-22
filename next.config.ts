import type { NextConfig } from "next";

const repo = "Round1_praavalegal_task";
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",              // static export (creates /out)
  trailingSlash: true,           // helps with GitHub Pages routing
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
  images: { unoptimized: true }, // required for GitHub Pages
};

export default nextConfig;