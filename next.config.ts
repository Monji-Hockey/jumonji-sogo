import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["node-ical"],
  async redirects() {
    return [{ source: "/company", destination: "/#company", permanent: false }];
  },
};

export default nextConfig;
