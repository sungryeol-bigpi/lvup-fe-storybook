import VueEasytable from 'vue-easytable'
import Vue from 'vue';
// less 관련 오류로 인해 storybook에서 popover 현재는 사용 불가능
import popover from '@shared/plugins/popover';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },

}

export const decorators = [(story) => {
  Vue.use(VueEasytable);
  Vue.use(popover)
  Vue.prototype.$t = arg => `${arg}`
  return {
    components: { story },
    template: '<story />'
  };
}]