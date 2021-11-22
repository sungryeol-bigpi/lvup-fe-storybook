import Selector from '@/views/components/coaching/Selector.vue';

export default {
  title: "coaching/Selector",
  component: Selector,
};

const Template = (args, {argTypes}) => ({
  components: {Selector},
  props: Object.keys(argTypes),
  template: `<Selector v-bind="$props"/>`
})

export const ThemeWhite = Template.bind({})
ThemeWhite.args = {
  value: 'value1',
  theme: 'white',
  list: [
    {value:'value1', label:'label1'},
    {value:'value2', label:'label2'},
    {value:'value3', label:'label3'},
    {value:'value4', label:'label4'},
  ],
}

export const ThemeWhiteReverse = Template.bind({})
ThemeWhiteReverse.args = {
  value: 'value1',
  theme: 'white-reverse',
  list: [
    {value:'value1', label:'label1'},
    {value:'value2', label:'label2'},
    {value:'value3', label:'label3'},
    {value:'value4', label:'label4'},
  ],
  style: {paddingTop: '200px'}
}