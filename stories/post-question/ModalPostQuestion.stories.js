import ModalPostQuestion from './ModalPostQuestionWrap.vue'

export default {
  title: "coaching/filter/ModalPostQuestion",
  component: ModalPostQuestion,
};

const Template = (args) => ({
  components: { ModalPostQuestion },
  props: Object.keys(args),
  template: `<ModalPostQuestion v-bind="$props" />`,
});

export const Normal = Template.bind({});