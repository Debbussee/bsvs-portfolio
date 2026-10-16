import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/thezeromandate',
        destination: '/thezeromandate/index.html',
      },
      {
        source: '/thezeromandate/',
        destination: '/thezeromandate/index.html',
      },
    ];
  },
};

export default nextConfig;

