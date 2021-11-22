import AreaMore from "@/views/components/coaching/question/AreaMore.vue";

export default {
  title: "coaching/question/AreaMore",
  component: AreaMore,
  parameters: {
    backgrounds: { default: "coach-grey" },
  },
};

const Template = (args, { argTypes }) => ({
  components: { AreaMore },
  props: Object.keys(argTypes),
  template: `<AreaMore v-bind="$props" />`,
});

export const Normal = Template.bind({});