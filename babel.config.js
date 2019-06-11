module.exports = {
    presets: [
        [
            "@babel/preset-env",
            {
                debug: true,
                loose: true,
                modules: "commonjs",
                targets: {
                    chrome: 64,
                    ios: 9,
                    ie: 11,
                },
                useBuiltIns: "usage",
                corejs: 3,
            },
        ],
    ],
};
