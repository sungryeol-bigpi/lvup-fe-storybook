import StatusBadgeSettlement from '@/views/components/coaching/sales/StatusBadgeSettlement.vue';

export default {
  title: "coaching/sales/StatusBadgeSettlement",
  component: StatusBadgeSettlement,
};

const Template = (args, {argTypes}) => ({
  components: {StatusBadgeSettlement},
  props: Object.keys(argTypes),
  template: `<StatusBadgeSettlement :value="value" />`
})

export const Completed = Template.bind({})
Completed.args = {value: 'COMPLETED'}

export const Waiting = Template.bind({})
Waiting.args = { value: 'WAITING'}

export const CarryOver = Template.bind({})
CarryOver.args = {value: 'CARRY_OVER'}

export const Excluded = Template.bind({})
Excluded.args = {value:'EXCLUDED'}