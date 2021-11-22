import CoachTvVideo from "@/views/components/coaching/coachTv/CoachTvVideo.vue";

export default {
  title: "coaching/CoachTv/CoachTvVideo",
  component: CoachTvVideo,
};

const coachTvContent = {
  tvContent: {
    contentCreatedDatetime: 1616420097000,
    contentUrl: "https://www.youtube.com/embed/4kA5B1JHRyo?enablejsapi=1",
    platformType: "YOUTUBE",
    thumbnailUrl: "dev/images/tv/content/1622787151317.jpg",
    title: "[PS아카데미] 탑라인 피드백_4화",
    tvContentGroup: {
      "tvContentGroupId": "60b8580124c52433b2eed8bd",
      "tvContentProviderId": "60b991e6d227ec1bf2e74b59",
      "title": "라이브 피드백",
      "description": "라이브방송?",
      "viewOrderOfContentProvider": 3
    }
  }
}
const Template = (args) => ({
  components: {CoachTvVideo},
  props: Object.keys(args),
  template: `<CoachTvVideo v-bind="$props" />`,
});

export const CoachTvVideoStory = Template.bind();
CoachTvVideoStory.args = coachTvContent;