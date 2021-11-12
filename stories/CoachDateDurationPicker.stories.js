import CoachDateDurationPicker from '@/views/components/coaching/CoachDateDurationPicker.vue';

export default {
  title: "coaching/CoachDateDurationPicker",
  component: CoachDateDurationPicker,
};

const Template = (args, {argTypes}) => ({
  components: {CoachDateDurationPicker},
  data: () => ({duration: {startDate: '2021-11-05', endDate: '2021-11-20'}}),
  props: Object.keys(argTypes),
  template: `<CoachDateDurationPicker v-model="duration" />`,
});

export const Story = Template.bind({});