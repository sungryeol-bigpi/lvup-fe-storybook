import CoachLessonProductCard from '@/views/components/coaching/lesson/CoachLessonProductCard';
import value from './mock/lesson-best-review.json';

export default {
  title: "coaching/lesson/CoachLessonProductCard",
  component: CoachLessonProductCard,
};

const Template = (args, {argTypes}) => ({
  components: {CoachLessonProductCard},
  props: Object.keys(argTypes),
  template: `<CoachLessonProductCard v-bind="$props" />`
})

export const CoachLessonProductCardStory = Template.bind({});
CoachLessonProductCardStory.args = {value};