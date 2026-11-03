/** @type {import('next').NextConfig} */
const nextConfig = {
  // Case studies moved from /<slug> to /work/<slug>; keep old links alive.
  async redirects() {
    return ["trooper", "family", "looter"].map((slug) => ({
      source: `/${slug}`,
      destination: `/work/${slug}`,
      permanent: true,
    }));
  },
};

export default nextConfig;
