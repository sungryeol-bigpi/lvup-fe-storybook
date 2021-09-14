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
        {groupName: 'LOL_LANE', text: '미드', value: 'MID'}
      ]
    }
  }
}

export const CaseB = Template.bind({})

CaseB.args = {
  value: {
    question: {
      createdDatetime: new Date('2021-03-05').getTime(),
      title: '테스트 질문입니다',
      categories: [
        {groupName: 'LOL_CHAMPION', text: '가렌', value: 'Garen', imageUrl: 'temp/5eba6d1b590b7924fcf0130e_1590745626994_1590745627508.jpg'}
      ]
    }
  }
}

export const LongTitle = Template.bind({})

LongTitle.args = {
  value: {
    question: {
      createdDatetime: new Date('2021-03-05').getTime(),
      title: '테스트 질문입니다. 어떻게 하면 하늘을 뚫고 날아가서 달에다 집을 짓고 가족과 함께 살 수 있을까요?',
      categories: [
        {groupName: 'LOL_LANE', text: '미드', value: 'MID'}
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
        {groupName: 'LOL_LANE', text: '미드', value: 'MID'}
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
        {groupName: 'LOL_LANE', text: '미드', value: 'MID'}
      ]
    }
  }
}
TabletPortrait.parameters = {
    ...setViewport('tabletPortrait')
}
