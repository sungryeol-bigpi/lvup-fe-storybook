import Vue from "vue";
import clickOutside from "@/directive/clickOutside";
import createStore from "@/store";
import VueRouter from "vue-router";
import scrollAgency from "@/plugins/scrollAgency";
import globalMixin from "@/mixins/global";
import browser from "@/modules/Browser";
// import store from './vuexStore'
import "swiper/swiper-bundle.css";
import "@/less/common.less";
// import i18n from "@/plugins/i18n";

// https://gs.statcounter.com/screen-resolution-stats/
const viewports = {
  mobileMedium: {
    name: "mobile(m) SCREEN_MM",
    styles: {
      width: "360px",
      height: "640px",
    },
  },
  mobileLarge: {
    name: "mobile(l) SCREEN_ML",
    styles: {
      width: "414px",
      height: "896px",
    },
  },
  tabletPortrait: {
    name: "tablet(p) SCREEN_TP",
    styles: {
      width: "768px",
      height: "1024px",
    },
  },
  tabletLandscape: {
    name: "tablet(l) SCREEN_TL",
    styles: {
      width: "1024px",
      height: "768px",
    },
  },
  desktopSmall: {
    name: "desktop(s) SCREEN_DS",
    styles: {
      width: "1260px",
      height: `${1260*.56}px`,
    },
  },
  desktopMedium: {
    name: "desktop(m) SCREEN_DM",
    styles: {
      width: "1420px",
      height: `${1420*.56}px`
    },
  },
  desktopLarge: {
    name: "desktop(l) SCREEN_DL",
    styles: {
      width: "1600px",
      height: "900px",
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "coach-white",
    values: [
      {
        name: "coach-white",
        value: "#ffffff",
      },
      {
        name: "coach-grey",
        value: "#ebebf0",
      },
      {
        name: "coach-deep-dark",
        value: "#1f2226",
      },
      {
        name: "coach-deep-blue",
        value: "#5555e2",
      },
    ],
  },
  viewport: {
    viewports,
  },
};

export const decorators = [
  (story) => {
    // Vue.use(i18n);

    Vue.prototype.$t = (...args) => `$t-${args.join(",")}`;
    Vue.prototype.$date = Vue.prototype.$t
    Vue.prototype.$te = () => true;
    Vue.prototype.$i18n = (key) => {
      const i18nData = { lang: "ko", country: "kr" };
      return i18nData[key] || "";
    };
    Vue.prototype.$fromNow = value => `$fromNow(${value})`
    Vue.directive("clickOutside", clickOutside);
    const store = createStore();
    Vue.use(scrollAgency, { store });
    Vue.use(VueRouter);
    Vue.mixin(globalMixin);
    browser.sync(store);
    return {
      components: { story },
      store,
      template: `<story />`,
    };
  },
];
