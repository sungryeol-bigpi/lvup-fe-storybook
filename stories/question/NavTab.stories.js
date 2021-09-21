import NavTab from "@/views/components/coaching/question/NavTab.vue";

export default {
  title: "coaching/question/NavTab",
  component: NavTab,
  parameters: {
    backgrounds: { default: "coach-grey" },
  },
};

const Template = (args, { argTypes }) => ({
  components: { NavTab },
  props: Object.keys(argTypes).filter(k => k !== 'defaultValue'),
  data: () => ({value: args.defaultValue}),
  template: `<NavTab v-bind="$props" v-model="value"/>`,
});

export const CaseA = Template.bind({});
CaseA.args = {
    items: [
        {text:'답변 완료', value:'answered'},
        {text:'답변 대기', value:'no-answer'},
        {text:'내 스크랩', value:'scrap'},
        {text:'내 질문',value:'my-question'}
    ],
    defaultValue: 'answered'
}