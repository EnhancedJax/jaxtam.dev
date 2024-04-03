const path = require("path");

const nextConfig = {
    webpack: config => {

        config.resolve.alias['@comp'] = path.join(__dirname, 'src/components');
        config.resolve.alias['@src'] = path.join(__dirname, 'src');
        config.module.rules.push({
            test: /\.node$/,
            use: "node-loader",
        });

        return config;
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'ap-northeast-1.graphassets.com',
                port: '',
                pathname: '/**',
            },
        ],
    }
};

module.exports = nextConfig;