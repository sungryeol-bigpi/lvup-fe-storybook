import QuestionDetail from "@/views/components/coaching/question-detail/QuestionDetail.vue";
import { setViewport } from "@utils/parameters";
import question from "@mocks/question.json";

export default {
  title: "coaching/question-detail/QuestionDetail",
  component: QuestionDetail,
  parameters: {
    backgrounds: { default: "coach-grey" },
  },
};

const Template = (args, { argTypes }) => ({
  components: { QuestionDetail },
  props: Object.keys(argTypes),
  template: `<QuestionDetail v-bind="$props" />`,
});

export const DesktopLargeA = Template.bind({});
DesktopLargeA.parameters = { ...setViewport("desktopLarge") };
DesktopLargeA.args = { question: question[0] };

export const MobileLargeA = Template.bind({});
MobileLargeA.parameters = { ...setViewport("mobileLarge") };
MobileLargeA.args = { question: question[0] };

export const DesktopLargeB = Template.bind({});
DesktopLargeB.parameters = { ...setViewport("desktopLarge") };
DesktopLargeB.args = { question: question[1] };

export const MobileLargeB = Template.bind({});
MobileLargeB.parameters = { ...setViewport("mobileLarge") };
MobileLargeB.args = { question: question[1] };
