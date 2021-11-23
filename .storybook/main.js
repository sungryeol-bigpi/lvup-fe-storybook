const path = require("path");
const pathCoaching = path.resolve(__dirname, "../services/coaching/src");
const pathShared = path.resolve(__dirname, "../shared");
const pathRoot = path.resolve(__dirname, "..");
// const pathStorybook = path.resolve(__dirname, "../stories");
const { DefinePlugin } = require("webpack");
const TARGET_NODE = process.env.WEBPACK_TARGET === "node";

require("dotenv").config();

// vue.config.js에서 설정 복사해옴
const {
  VUE_APP_SCREEN_MM,
  VUE_APP_SCREEN_ML,
  VUE_APP_SCREEN_TP,
  VUE_APP_SCREEN_TL,
  VUE_APP_SCREEN_DS,
  VUE_APP_SCREEN_DM,
  VUE_APP_SCREEN_DL,
} = process.env;

const lessLoader = {
  loader: "less-loader",
  options: {
    additionalData: `
@SCREEN_MM: ${VUE_APP_SCREEN_MM};
@SCREEN_ML: ${VUE_APP_SCREEN_ML};
@SCREEN_TP: ${VUE_APP_SCREEN_TP};
@SCREEN_TL: ${VUE_APP_SCREEN_TL};
@SCREEN_DS: ${VUE_APP_SCREEN_DS};
@SCREEN_DM: ${VUE_APP_SCREEN_DM};
@SCREEN_DL: ${VUE_APP_SCREEN_DL};`,
    lessOptions: {
      paths: [path.resolve(__dirname, "../services/coaching")], // lvupPath 우선확인 -> coachingPath 우선 확인
    },
  },
};

module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  async webpackFinal(config, webpack) {
    config.module.rules.push({
      test: /\.less$/,
      use: ["vue-style-loader", "css-loader", lessLoader],
      // include: pathCoaching, // <-- 해당 코드가 있으면 Module parse failed: Unexpected character '@' 버그 발생
    });
    config.resolve.alias["~@shared"] = pathShared;
    config.resolve.alias["~@"] = pathRoot;
    config.resolve.alias["@shared"] = pathShared;
    config.resolve.alias["@"] = pathCoaching;
    config.plugins.push(new DefinePlugin({ TARGET_NODE }));
    return config;
  },
};
