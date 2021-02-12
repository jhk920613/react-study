const {
    addDecoratorsLegacy, // decorator를 사용할 수 있도록 해주는 config
    disableEsLint,
    override,
    addWebpackAlias,
    watchAll,
    overrideDevServer,
} = require("customize-cra");
const path = require('path');

// 사용자 정의 웹팩 설정
module.exports = {
    webpack: override(
        disableEsLint(),
        addDecoratorsLegacy(),
        addWebpackAlias({
            '@': path.resolve(__dirname, 'src'),
        })
    ),
    devServer: overrideDevServer(
        // dev server plugin
        watchAll()
    ),
    output: {
        path: path.join(__dirname, '/src/'),
        filename: '[name].[chunkhash:8].js',
    },
};