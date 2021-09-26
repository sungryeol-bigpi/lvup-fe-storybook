import FilterChamp from "@/views/components/coaching/filter/FilterChamp.vue";
import lolChamps from '../mock/lol-champs'

export default {
  title: "coaching/FilterChamp",
  component: FilterChamp,
};

const Template = (args) => ({
  components: { FilterChamp },
  props: Object.keys(args),
	data: () => ({ value: 'Garen' }),
  template: `<FilterChamp v-bind="$props" v-model="value" />`,
});

export const CaseA = Template.bind({});
CaseA.args = { getChamps: (keyword) =>lolChamps.filter(c => c.koName.includes(keyword)) };
