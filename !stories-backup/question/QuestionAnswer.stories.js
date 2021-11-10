import QuestionAnswer from "@/views/components/coaching/question-detail/QuestionAnswer.vue";
import answer from "@mocks/answer";
import { setViewport } from "@utils/parameters";

export default {
  title: "coaching/question-detail/QuestionAnswer",
  component: QuestionAnswer,
  parameters: {
    backgrounds: { default: "coach-grey" },
  },
};

const Template = (args, { argTypes }) => ({
  components: { QuestionAnswer },
  props: Object.keys(argTypes),
  template: `<QuestionAnswer v-bind="$props" />`,
});

export const DesktopLarge = Template.bind({});
DesktopLarge.args = { answer: answer[0] };
DesktopLarge.parameters = { ...setViewport("desktopLarge") };

export const MobileMedium = Template.bind({});
MobileMedium.args = { answer: answer[0] };
MobileMedium.parameters = { ...setViewport("mobileMedium") };
