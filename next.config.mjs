/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Pin the file-tracing root to this project so a lockfile in a parent
  // directory can't make the build trace the wrong workspace.
  outputFileTracingRoot: import.meta.dirname,
  // Serve the storefront (dynastywebproducts project) at dynastyweb.co/products.
  // Unlinked on purpose — direct link only.
  async rewrites() {
    return [
      {
        source: '/products',
        destination: 'https://dynastywebproducts.vercel.app/products',
      },
      {
        source: '/products/:path*',
        destination: 'https://dynastywebproducts.vercel.app/products/:path*',
      },
    ];
  },
};

export default nextConfig;
