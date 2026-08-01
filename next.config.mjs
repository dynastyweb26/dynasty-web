/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Pin the file-tracing root to this project so a lockfile in a parent
  // directory can't make the build trace the wrong workspace.
  outputFileTracingRoot: import.meta.dirname,
};

export default nextConfig;
