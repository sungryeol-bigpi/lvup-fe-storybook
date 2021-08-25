import Vue from "vue";
import 'swiper/swiper-bundle.css';
// import i18n from "@/plugins/i18n";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (story) => {
    // Vue.use(i18n);
    Vue.prototype.$t = (...args) => `$t-${args.join(',')}`
    return {
      components: { story },
      template: `<story />`,
    };
  },
];
