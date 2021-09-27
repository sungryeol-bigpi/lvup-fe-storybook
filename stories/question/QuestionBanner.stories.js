import QuestionBanner from "@/views/components/coaching/question/QuestionBanner.vue";
import { setViewport } from "@utils/parameters";

export default {
  title: "coaching/question/QuestionBanner",
  component: QuestionBanner,
  parameters: {
    backgrounds: { default: "coach-grey" },
    ...setViewport('desktopLarge')
  },
};

const Template = (args, { argTypes }) => ({
  components: { QuestionBanner },
  props: Object.keys(argTypes),
  template: `<QuestionBanner v-bind="$props" />`
});

export const DesktopLarge = Template.bind({});

export const MobileMedium = Template.bind({})
MobileMedium.parameters = {...setViewport('mobileMedium')};