import CoachTvFilterModalView from "@/views/components/coaching/coachTv/CoachTvFilterModalView.vue";

export default {
  title: "coaching/CoachTv/CoachTvFilterModalView",
  component: CoachTvFilterModalView,
};

const data = {
  platformFilterList: ["YOUTUBE","TWITCH"],
  playlistFilterList: ["자낳대 분석데스크","유저 피드백","https://www.youtube.com/embed/dytGQq-V8Z4?enablejsapi=0 테스트 입니다.","라이브 피드백","테스트2"]
}
const Template = (args) => ({
  components: {CoachTvFilterModalView},
  props: Object.keys(args),
  template: `<CoachTvFilterModalView v-bind="$props" />`,
});

export const CoachTvFilterModalViewStory = Template.bind();
CoachTvFilterModalViewStory.args = data;