import FilterLane from "@/views/components/coaching/filter/FilterLane.vue";

export default {
  title: "coaching/FilterLane",
  component: FilterLane,
};

const Template = (args) => ({
  components: { FilterLane },
  props: Object.keys(args),
  data: () => ({ value: "ALL" }),
  template: `<FilterLane v-bind="$props" v-model="value" />`,
});

export const CaseA = Template.bind({});
CaseA.args = { positions: [
	{ key: "ALL", label: "전체" },
	{key: 'MID', label: '미드'},
	{key: 'AD_CARRY', label: '바텀'},
	{key: 'JUNGLE', label:'정글'},
	{key: 'TOP', label:'탑'},
] };
