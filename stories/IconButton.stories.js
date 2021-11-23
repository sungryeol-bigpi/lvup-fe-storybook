import IconButton from '@/views/components/coaching/IconButton';

export default {
  title: 'coaching/IconButton',
  component: IconButton,
};

const Template = (args, { argTypes }) => ({
  components: { IconButton },
  props: Object.keys(argTypes),
  template: `<IconButton v-bind="$props">목록 받기</IconButton>`,
});

export const Story = Template.bind({});
Story.args = {
  src: '/img/coaching/file-download-icon.svg',
  disabled: false,
};
export const StoryNoIcon = Template.bind({
  disabled: false,
});
export const StoryDisabled = Template.bind({});
StoryDisabled.args = {
  src: '/img/coaching/file-download-icon.svg',
  disabled: true
};