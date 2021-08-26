import Vue from "vue";
import clickOutside from "@/directive/clickOutside";
import createStore from "@/store";
import VueRouter from "vue-router";
import scrollAgency from "@/plugins/scrollAgency";
import 'swiper/swiper-bundle.css';
import '@/less/common.less';
// import i18n from "@/plugins/i18n";

export const parameters = {
  actions: {argTypesRegex: "^on[A-Z].*"},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'coach-white',
    values: [
      {
        name: 'coach-white',
        value: '#ffffff',
      },
      {
        name: 'coach-grey',
        value: '#ebebf0',
      },
      {
        name: 'coach-deep-dark',
        value: '#1f2226',
      },
      {
        name: 'coach-deep-blue',
        value: '#5555e2',
      }
    ]
  }
};

export const decorators = [
  (story) => {
    // Vue.use(i18n);

    Vue.prototype.$t = (...args) => `$t-${args.join(",")}`;
    Vue.prototype.$te = () => true;
    Vue.directive("clickOutside", clickOutside);
    const store = createStore();
    Vue.use(scrollAgency, {store});
    Vue.use(VueRouter);
    return {
      components: {story},
      template: `<story />`,
    };
  },
];
