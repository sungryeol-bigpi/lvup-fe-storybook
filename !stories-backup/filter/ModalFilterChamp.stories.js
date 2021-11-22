import ModalFilterChampWrap from './ModalFilterChampWrap.vue'

export default {
  title: "coaching/filter/ModalFilterChamp",
  component: ModalFilterChampWrap,
};

const Template = (args) => ({
  components: { ModalFilterChampWrap },
  props: Object.keys(args),
  template: `<ModalFilterChampWrap v-bind="$props" />`,
});

export const Normal = Template.bind({});