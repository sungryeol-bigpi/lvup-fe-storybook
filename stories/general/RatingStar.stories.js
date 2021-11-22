import RatingStar from '@/views/components/general/RatingStar.vue';

export default {
  title: "coaching/sales/RatingStar",
  component: RatingStar,
};

const Template = (args, {argTypes}) => ({
  components: {RatingStar},
  props: Object.keys(argTypes),
  template: `<RatingStar v-bind="$props"/>`
})

export const ZeroStar = Template.bind({})
ZeroStar.args = {value:0}

export const ThreeStar = Template.bind({})
ThreeStar.args = {value:3}

export const Readonly = Template.bind({})
Readonly.args = {readonly:true}
