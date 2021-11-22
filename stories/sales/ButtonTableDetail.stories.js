import ButtonTableDetail from '@/views/components/coaching/sales/ButtonTableDetail.vue';

export default {
  title: "coaching/sales/ButtonTableDetail",
  component: ButtonTableDetail,
};

const Template = (args, {argTypes}) => ({
  components: {ButtonTableDetail},
  props: Object.keys(argTypes),
  template: `<ButtonTableDetail />`
})

export const Base = Template.bind({})