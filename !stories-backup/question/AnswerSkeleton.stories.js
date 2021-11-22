import AnswerSkeleton from "@/views/components/coaching/question/AnswerSkeleton.vue";

export default {
  title: "coaching/question/AnswerSkeleton",
  component: AnswerSkeleton,
  parameters: {
    backgrounds: { default: "coach-grey" },
  },
};

const Template = (args, { argTypes }) => ({
  components: { AnswerSkeleton },
  props: Object.keys(argTypes),
  template: `<AnswerSkeleton v-bind="$props" />`,
});

export const Normal = Template.bind({});