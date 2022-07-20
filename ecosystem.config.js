module.exports = {
  apps: [
    {
      name: "web_hook",
      script: "./index.js",
      watch: true,
      env: {
        "PORT": 8085,
        "APP_URL": "http://pay.nwt.net.br/api",
        "NODE_ENV": "production"
      }
    }
  ]
}