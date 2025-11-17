import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
    remotePatterns: [new URL('https://pioneer-alpha-website-django-s3-bucket-new-2.s3.amazonaws.com/**')],
  },
};

export default nextConfig;
