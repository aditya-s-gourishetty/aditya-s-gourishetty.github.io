/** @type {import('next').NextConfig} */
const BASE_PATH = process.env.NEXT_BASE_PATH || '';

module.exports = {
  output: 'export',               // enables `next export`
  basePath: BASE_PATH,            // required for GitHub Pages subpath
  assetPrefix: BASE_PATH + '/',   // ensure assets load under subpath
  images: { unoptimized: true },  // static export doesn't support Image Optimization
};
