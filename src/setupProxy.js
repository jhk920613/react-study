const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/todoList-server',
        createProxyMiddleware({
            target: 'http://localhost:8080',
            pathRewrite: {
                '/todoList-server': ''
            },
            changeOrigin: true,
        })
    );
};