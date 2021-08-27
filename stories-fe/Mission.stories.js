import Mission from "@/views/components/coaching/user/Mission.vue";

export default {
  title: "coaching/user/Mission",
  component: Mission,
  parameters: {
    backgrounds: { default: "coach-grey" },
  },
};

const Template = (args, { argTypes }) => ({
  components: { Mission },
  props: Object.keys(argTypes),
  template: `<Mission v-bind="$props" />`,
});

export const Empty = Template.bind({});
Empty.args = {};

export const CaseA = Template.bind({});
CaseA.args = {
  value: {
    missionId: "6041f98c17675200017664ca",
    title: "선호 챔피언 추가&변경",
    description: "선호 챔피언을 추가 하서나 변경해 주세요.",
    tooltip:
      "코칭 홈 -> 선호챔피언을 직접 추가하거나 변경하면 달성되는 미션입니다. (최초 1회)",
    missionType: "REGISTER_PREFER_LOL_CHAMPION",
    missionGroupType: "THIRD_PARTY",
    images: {
      logo: "prod/images/tournament/1586331002069.png",
      md: "prod/images/tournament/1586332594611.jpg",
    },
    rewardType: "CASH_REWARD",
    rewardValue: "100",
    rewardUnit: "UP",
    frontRoutePath: "/coach/LOL",
    createdDatetime: 1614936460831,
    private: null,
  },
};

export const CaseB = Template.bind({});
CaseB.args = {
  value: {
    missionId: "6041f9b017675200017664cc",
    title: "코치 수강 카드 보기 3명",
    description: "코치썸네일을 눌러 이력과 리뷰를 확인하세요.",
    tooltip:
      "코칭 홈 -> 코치 목록에서 원하는 코치를 클릭하여, 프로필을 확인하면 달성되는 미션입니다. (최초 1회)",
    missionType: "VIEW_COACH_CARD",
    missionGroupType: "COACH",
    images: {
      logo: "prod/images/tournament/1586331002069.png",
      md: "prod/images/tournament/1586332594611.jpg",
    },
    rewardType: "CASH_REWARD",
    rewardValue: "100",
    rewardUnit: "UP",
    frontRoutePath: "/coach/LOL",
    createdDatetime: 1614936496663,
    private: {
			status: 'COMPLETE'
		},
  },
};
