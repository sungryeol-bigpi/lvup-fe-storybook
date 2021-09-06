import Rating from "@/views/components/coaching/Rating.vue";

export default {
  title: "coaching/user/Rating",
  component: Rating,
  parameters: {
    backgrounds: { default: "coach-grey" },
  },
};

const Template = (args, { argTypes }) => ({
  components: { Rating },
  props: Object.keys(argTypes),
  template: `<Rating v-bind="$props" />`,
});

export const Zero = Template.bind({});
Zero.args = { value: 0 };

export const FourFive = Template.bind({});
FourFive.args = { value: 4.5 };

export const Five = Template.bind({});
Five.args = { value: 5 };

export const LargeNum = Template.bind({});
LargeNum.args = { value: 3.23543 };
