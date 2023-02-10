const path = require("path");

const includedDirs = [
    path.resolve(__dirname, "src/components"),
    path.resolve(__dirname, "src/pages"),
    path.resolve(__dirname, "src/styles"),
];

const createTwinMacroRule = (config, options, includedDirs, dev) => {
    return {
        test: /\.(tsx|ts)$/,
        include: includedDirs,
        use: [
            options.defaultLoaders.babel,
            {
                loader: "babel-loader",
                options: {
                    sourceMaps: dev,
                    presets: [
                        [
                            "@babel/preset-react",
                            { runtime: "automatic", importSource: "@emotion/react" },
                            "next/babel"
                        ],
                    ],
                    plugins: [
                        require.resolve("babel-plugin-macros"),
                        require.resolve("@emotion/babel-plugin"),
                        [
                            require.resolve("@babel/plugin-syntax-typescript"),
                            { isTSX: true },
                        ],
                    ],
                },
            },
        ],
    }
}

const setRawLoaderRule = (config) => {
    config.externals.fs = 'fs'

    config.module.rules.push({
        test: /\.md$/,
        loader: 'raw-loader',
    })
}

module.exports = function(nextConfig) {
    return {
        ...nextConfig,
        webpack(config, options) {
            const { dev, isServer } = options;
            config.module = config.module || {};
            config.module.rules = config.module.rules || [];

            config.module.rules.push(createTwinMacroRule(config, options, includedDirs, dev));

            setRawLoaderRule(config)

            if (!isServer) {
                config.resolve.fallback = {
                    ...(config.resolve.fallback || {}),
                    fs: false,
                    module: false,
                    path: false,
                    os: false,
                    crypto: false,
                };
            }

            if (typeof nextConfig.webpack === "function") {
                return nextConfig.webpack(config, options);
            } else {
                return config;
            }
        },
    };
};