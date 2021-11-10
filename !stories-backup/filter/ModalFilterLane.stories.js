import ModalFilterLaneWrap from './ModalFilterLaneWrap.vue'

export default {
  title: "coaching/filter/ModalFilterLane",
  component: ModalFilterLaneWrap,
};

const Template = (args) => ({
  components: { ModalFilterLaneWrap },
  props: Object.keys(args),
  template: `<ModalFilterLaneWrap v-bind="$props" />`,
});

export const Normal = Template.bind({});