/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ap-northeast-1.graphassets.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
