import PointIcon from "@/views/components/coaching/PointIcon.vue";

export default {
  title: "coaching/PointIcon",
  component: PointIcon,
};

const Template = (args, { argTypes }) => ({
  components: { PointIcon },
  props: Object.keys(argTypes),
  template: `<PointIcon v-bind="$props" />`,
});

export const Normal = Template.bind({});
export const White = Template.bind({});
White.args = {
  shape: "white",
  value: 500,
};
export const PurpleLarge = Template.bind({});
PurpleLarge.args = {
  shape: "purple-large",
  value: 500,
};
export const PurpleNormal = Template.bind({});
PurpleNormal.args = {
  shape: "purple-normal",
  value: 500,
};
export const Transparent = Template.bind({});
Transparent.args = {
  shape: "transparent",
  value: 500,
};
export const TransparentBadge = Template.bind({});
TransparentBadge.args = {
  shape: "transparent-badge",
  value: 500,
};

export const NormalNoText = Template.bind({});
NormalNoText.args = {
  shape: "normal",
  value: 500,
  showCurrency: false,
};

export const Clickable = Template.bind({});
Clickable.args = {
  value: 6032,
  clickable: true,
};
