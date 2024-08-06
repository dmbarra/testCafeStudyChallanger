let os = require("os");

module.exports = {
  src: "tests/",
  browsers: ["chrome"],
  baseUrl: "http://localhost:3001/",
  baseUrlApi: "http://localhost:3000",
  skipJsErrors: true,
  hostname: os.hostname(),
};
