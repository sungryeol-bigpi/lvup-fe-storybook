import CoachDatePicker from '@/views/components/coaching/CoachDatePicker.vue';

export default {
  title: 'coaching/CoachDatePicker',
  component: CoachDatePicker,
};

const Template = (args, { argTypes }) => ({
  components: { CoachDatePicker },
  data: () => ({
    date: '2021-11-11'
  }),
  props: Object.keys(argTypes),
  template: `<CoachDatePicker v-model="date" v-bind="$props" />`,
});

export const story = Template.bind({});
story.args = { disable: false };

export const disabled = Template.bind({});
disabled.args = { disable: true };