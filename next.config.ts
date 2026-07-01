import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["node-ical"],
  async redirects() {
    return [
      {
        source: "/voices/:id",
        destination: "/voices",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
