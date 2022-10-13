const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    createProxyMiddleware("/", {
      target: "http://www.aladin.co.kr/ttb/api/ItemList.aspx",
      changeOrigin: true,
    })
  );
};
