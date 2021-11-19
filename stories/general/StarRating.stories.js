import StarRating from '@/views/components/coaching/sales/StatusBadgeSettlement.vue';

export default {
  title: "coaching/sales/StarRating",
  component: StarRating,
};

const Template = (args, {argTypes}) => ({
  components: {StarRating},
  props: Object.keys(argTypes),
  template: `<StarRating :readonly="readonly"/>`
})

export const Readonly = Template.bind({})
Readonly.args = {readonly:true}
