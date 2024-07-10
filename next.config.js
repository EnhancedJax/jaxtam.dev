const path = require("path");

const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.node$/,
      use: "node-loader",
    });

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.discoverhongkong.com",
        port: "",
        pathname: "/**",
      },
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
