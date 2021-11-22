import VueEasytable from 'vue-easytable'
import Vue from 'vue';
Vue.use(VueEasytable)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}