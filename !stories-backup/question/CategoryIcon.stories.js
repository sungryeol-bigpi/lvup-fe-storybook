import CategoryIcon from "@/views/components/coaching/question/CategoryIcon.vue";

export default {
  title: "coaching/question/CategoryIcon",
  component: CategoryIcon,
  parameters: {
    backgrounds: { default: "coach-grey" },
  },
};

const Template = (args, { argTypes }) => ({
  components: { CategoryIcon },
  props: Object.keys(argTypes),
  template: `<CategoryIcon v-bind="$props" />`,
});

export const CategoryLaneAll = Template.bind({});
CategoryLaneAll.args = { category: {"groupName":"LOL_LANE","value":"ALL","text":"상관 없음","seq":0} };

export const CategoryChampOrnn = Template.bind({});
CategoryChampOrnn.args = { category: {"groupName":"LOL_CHAMPION","value":"Ornn","text":"오른","seq":0} };

// 정확한 랭크정보를 확보하지 못한 상태. 나중에 예제 추가할 것.
export const CategoryRank = Template.bind({});
CategoryRank.args = { category: {"groupName": "LOL_RANK" }}