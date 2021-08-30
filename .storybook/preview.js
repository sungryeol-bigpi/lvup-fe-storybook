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
  },
  viewport: {
    viewports: {
      DL: {
        name: 'DL (1600)',
        styles: {
          width: '1600px',
          height: '100%'
        }
      },
      DM: {
        name: 'DM (1420)',
        styles: {
          width: '1420px',
          height: '100%'
        }
      },
      DS: {
        name: 'DS (1260)',
        styles: {
          width: '1260px',
          height: '100%'
        }
      },
      TL: {
        name: 'TL (1024)',
        styles: {
          width: '1024px',
          height: '100%'
        }
      },
      TP: {
        name: 'TP (768)',
        styles: {
          width: '768px',
          height: '100%'
        }
      },
      ML: {
        name: 'ML (414)',
        styles: {
          width: '414px',
          height: '100%'
        }
      },
      MM: {
        name: 'MM (360)',
        styles: {
          width: '360px',
          height: '100%'
        }
      },
    }
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
