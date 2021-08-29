import AutoNumberAnimator from "@/views/components/coaching/AutoNumberAnimator.vue";
import { commaDecimal } from "@/utils/numberUtils";

export default {
  title: "coaching/AutoNumberAnimator",
  component: AutoNumberAnimator,
  parameters: {
    backgrounds: { default: "coach-grey" },
  },
};

const Template = (args, { argTypes }) => ({
  components: { AutoNumberAnimator },
  props: Object.keys(argTypes),
  template: `<AutoNumberAnimator v-bind="$props" />`,
});

export const CaseA = Template.bind({});
CaseA.args = {
  value: 1000,
};

export const CaseB = Template.bind({});
CaseB.args = {
  value: 5000,
  duration: 3000,
};

export const WithDelimiter = (args, { argTypes }) => ({
  components: { AutoNumberAnimator },
  props: Object.keys(argTypes),
  methods: { commaDecimal },
  template: `
<AutoNumberAnimator v-slot="{ targetNumber }" v-bind="$props" >
{{ commaDecimal(Math.round(targetNumber)) }}
</AutoNumberAnimator>
`,
});
WithDelimiter.args = {
  value: 9999999,
  duration: 3000,
};
