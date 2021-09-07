import Question from "@/views/components/coaching/user/Question.vue";
import { setBackgroundColor, setViewport } from "../util/parameters";

export default {
  title: "coaching/user/Question",
  component: Question,
  parameters: {
    ...setBackgroundColor('coach-grey')
  }
};

const Template = (args, { argTypes }) => ({
  components: { Question },
  props: Object.keys(argTypes),
  template: `<Question v-bind="$props" />`,
});

export const Empty = Template.bind({})

export const CaseA = Template.bind({})

CaseA.args = {
  value: {
    question: {
      createdDatetime: new Date('2021-03-05').getTime(),
      title: '테스트 질문입니다',
      categories: [
        {type: 'LOL_LANE', text: '미드', value: 'MID'}
      ]
    }
  }
}

export const Mobile = Template.bind({})

Mobile.args = {
  value: {
    question: {
      createdDatetime: new Date('2021-03-05').getTime(),
      title: '테스트 질문입니다',
      categories: [
        {type: 'LOL_LANE', text: '미드', value: 'MID'}
      ]
    }
  }
}
Mobile.parameters = {
    ...setViewport('mobileMedium')
}

export const TabletPortrait = Template.bind({})

TabletPortrait.args = {
  value: {
    question: {
      createdDatetime: new Date('2021-03-05').getTime(),
      title: '테스트 질문입니다',
      categories: [
        {type: 'LOL_LANE', text: '미드', value: 'MID'}
      ]
    }
  }
}
TabletPortrait.parameters = {
    ...setViewport('tabletPortrait')
}
