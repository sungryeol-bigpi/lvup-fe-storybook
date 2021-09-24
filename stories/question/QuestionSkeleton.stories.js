import QuestionSkeleton from "@/views/components/coaching/question/QuestionSkeleton.vue";

export default {
  title: "coaching/question/QuestionSkeleton",
  component: QuestionSkeleton,
  parameters: {
    backgrounds: { default: "coach-grey" },
  },
};

const Template = (args, { argTypes }) => ({
  components: { QuestionSkeleton },
  props: Object.keys(argTypes),
  template: `<QuestionSkeleton v-bind="$props" />`,
});

export const Normal = Template.bind({});