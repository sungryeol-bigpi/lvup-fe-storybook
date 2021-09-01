import MedalLabel from "@/views/components/coaching/MedalLabel.vue";

export default {
  title: "coaching/MedalLabel",
  component: MedalLabel,
};

const Template = (args, {argTypes}) => ({
  components: {MedalLabel},
  props: Object.keys(argTypes),
  template: `<MedalLabel v-bind="$props" />`,
});

export const pink = Template.bind({});
pink.args = {label: '1'}

export const purple = Template.bind({});
purple.args = {label: '4', color: 'purple'}