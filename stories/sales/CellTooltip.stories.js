import CellTooltip from "@/views/components/coaching/sales/CellTooltip.vue";

export default {
  title: "coaching/sales/CellTooltip",
  component: CellTooltip,
};

const Template = (args, { argTypes }) => ({
  components: { CellTooltip },
  props: Object.keys(argTypes),
  template: `<CellTooltip v-bind="$props" />`,
});

export const NoText = Template.bind({});

export const TextA = Template.bind({});
TextA.args = { text: "sample text" };