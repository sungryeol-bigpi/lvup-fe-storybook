import ButtonDownload from '@/views/components/coaching/ButtonDownload';

export default {
  title: 'coaching/ButtonDownload',
  component: ButtonDownload,
};

const Template = (args, { argTypes }) => ({
  components: { ButtonDownload },
  props: Object.keys(argTypes),
  template: `<ButtonDownload v-bind="$props">목록 받기</ButtonDownload>`,
});

export const Story = Template.bind({});
Story.args = {
  src: '/img/coaching/file-download-icon.svg',
  disabled: false,
};