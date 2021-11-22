import CoachQuestionCard from "@/views/components/coaching/question/CoachQuestionCard.vue";
import previewQuestion from './mock/preview-question.json'

export default {
  title: "coaching/question/CoachQuestionCard",
  component: CoachQuestionCard,
};

const Template = (args, {argTypes}) => ({
  components: {CoachQuestionCard},
  props: Object.keys(argTypes),
  template: `<CoachQuestionCard v-bind="$props" />`,
});

export const CoachQuestionCardStory = Template.bind({});
CoachQuestionCardStory.args = {previewQuestion: previewQuestion}