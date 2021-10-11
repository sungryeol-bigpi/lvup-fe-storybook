import ModalTutor from './ModalTutorWrap.vue'

export default {
  title: "coaching/modal-tutor/ModalTutor",
  component: ModalTutor,
};

const Template = (args) => ({
  components: { ModalTutor },
  props: Object.keys(args),
  template: `<ModalTutor v-bind="$props" />`,
});

export const Normal = Template.bind({});