import SimpleTabs from "@/views/components/coaching/SimpleTabs.vue";
import SimpleTab from "@/views/components/coaching/SimpleTab.vue";

export default {
  title: "coaching/SimpleTabs",
  component: SimpleTabs,
};

const Template = (args, { argTypes }) => ({
  components: { SimpleTabs, SimpleTab },
  props: Object.keys(argTypes),
  template: `<SimpleTabs v-bind="$props" />`,
});

export const CaseA = () => ({
  components: { SimpleTabs, SimpleTab },
  data: () => ({ value: "a" }),
  computed: {
    list() {
      return [
          {label: 'item a', key: 'a'},
          {label: 'item b', key: 'b'},
          {label: 'item c', key: 'c'},
          {label: 'item d', key: 'd'},
        ];
    },
  },
  template: `
<SimpleTabs v-model="value">
  <SimpleTab v-for="item in list" :key="item.key" v-slot="{k, active}">{{item.label}} {{active}}</SimpleTab>
</SimpleTabs>
`,
});
