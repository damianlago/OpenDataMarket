const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
    app.use(
        "/api",
        createProxyMiddleware({
            target: "http://18.157.253.218:3000",
            changeOrigin: true,
        })
    );
};