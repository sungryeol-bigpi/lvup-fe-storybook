import RatingStar from "@/views/components/manage/RatingStar.vue";

export default {
  title: "coaching/RatingStar",
  component: RatingStar,
  parameters: {
    backgrounds: { default: "coach-grey" },
  },
};

const Template = (args, { argTypes }) => ({
  components: { RatingStar },
  props: Object.keys(argTypes).filter(k => k !== 'value'),
	data: () => ({ value: args.value || 0 }),
  template: `<RatingStar v-bind="$props" v-model="value" />`,
});

export const Sample = Template.bind({})
Sample.args = { value: 3.5 };
