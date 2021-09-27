const path = require("path");
const pathRoot = path.resolve(__dirname, "../src");
const pathStorybook = path.resolve(__dirname, '../stories');
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

module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  async webpackFinal(config) {
    // vue.config.js에서 설정 복사해옴
    config.module.rules.push({
      test: /\.less$/,
      use: [
        "vue-style-loader",
        "css-loader",
        {
          loader: "less-loader",
          options: {
            additionalData: `
            @SCREEN_MM: ${VUE_APP_SCREEN_MM};
            @SCREEN_ML: ${VUE_APP_SCREEN_ML};
            @SCREEN_TP: ${VUE_APP_SCREEN_TP};
            @SCREEN_TL: ${VUE_APP_SCREEN_TL};
            @SCREEN_DS: ${VUE_APP_SCREEN_DS};
            @SCREEN_DM: ${VUE_APP_SCREEN_DM};
            @SCREEN_DL: ${VUE_APP_SCREEN_DL};
          `,
          },
        },
      ],
      include: pathRoot,
    });
    config.resolve.alias['@graphics'] = path.join(pathRoot, 'views', 'graphics');
    config.resolve.alias['@mocks'] = path.join(pathStorybook, 'mock');
    config.resolve.alias['@samples'] = path.join(pathStorybook, 'sample');
    config.resolve.alias['@utils'] = path.join(pathStorybook, 'util');
    config.resolve.alias["~@"] = pathRoot;
    config.resolve.alias["@"] = pathRoot;
    return config;
  },
};
