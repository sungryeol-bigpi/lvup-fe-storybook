import FlagLabel from "@/views/components/coaching/FlagLabel.vue";

export default {
  title: "coaching/FlagLabel",
  component: FlagLabel,
};

const Template = (args, {argTypes}) => ({
  components: {FlagLabel},
  props: Object.keys(argTypes),
  template: `<FlagLabel v-bind="$props" />`,
});

export const FlagLabelStory = Template.bind({});
FlagLabelStory.args = {label: 'AD'}