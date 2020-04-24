const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function(app) {
    app.use(
        "/api",
        createProxyMiddleware({
            target: "http://[::1]:2020",
            secure: true,
            logLevel: "debug",
            changeOrigin: true,
            headers: {
                Connection: "keep-alive"
            }
            // pathRewrite: { "^/*": "" }
        })
    );
};
