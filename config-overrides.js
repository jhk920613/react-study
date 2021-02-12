const {
    addDecoratorsLegacy, // decorator를 사용할 수 있도록 해주는 config
    disableEsLint,
    override,
    addWebpackAlias,
    watchAll,
    overrideDevServer,
} = require("customize-cra");
const path = require('path');

const devServerConfig = () => config => {

    console.log(config)
    return {
        ...config,
        historyApiFallback: true,
        // historyApiFallback: {
        //     rewrites: [
        //         { from: /.*/, to: path.posix.join(config.dev.assertPublicPath,'index.html') },
        //     ],
        // }
    }
}

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
        // watchAll(),
        devServerConfig(),
    ),
    output: {
        path: path.join(__dirname, '/src/'),
        filename: '[name].[chunkhash:8].js',
    },
};