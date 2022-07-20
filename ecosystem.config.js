module.exports = {
  apps: [
    {
      name: "web_hook",
      script: "./index.js",
      watch: false,
      env: {
        "PORT": 8085,
        "API_URL": "http://pay.nwt.net.br/api",
        "NODE_ENV": "production"
      }
    }
  ]
}
