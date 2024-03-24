const path = require("path");

const nextConfig = {
    webpack: config => {
        config.module.rules.push({
            test: /\.node$/,
            use: "node-loader",
        });

        return config;
    },
};

module.exports = nextConfig;