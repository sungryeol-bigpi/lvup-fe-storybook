import FilterLane from "@/views/components/coaching/filter/FilterLane.vue";
import lolLane from '@mocks/lol-lanes.json';

export default {
  title: "coaching/filter/FilterLane",
  component: FilterLane,
};

const Template = (args) => ({
  components: { FilterLane },
  props: Object.keys(args),
  data: () => ({ value: "ALL" }),
  template: `<FilterLane v-bind="$props" v-model="value" />`,
});

export const CaseA = Template.bind({});
CaseA.args = { lanes: lolLane };
