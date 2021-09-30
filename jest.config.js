// const babelJest = ["babel-jest", { configFile: "./babel.config.js" }];
module.exports = {
  moduleFileExtensions: ["js", "json", "vue"],
  transform: { "\\.[jt]sx?$": "babel-jest", ".*\\.(vue)$": "vue-jest" },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};
