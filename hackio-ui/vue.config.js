module.exports = {
    devServer: {
      proxy: {
        "^/api": {
          target: "http://localhost:88",
          ws: true,
          changeOrigin: true
        }
      }
    }
  }