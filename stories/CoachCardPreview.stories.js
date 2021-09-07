import CoachCardPreview from "@/views/components/coaching/CoachCardPreview.vue";

export default {
  title: "coaching/ranking/CoachCardPreview",
  component: CoachCardPreview,
};

const rank = 1;
const coachInfo = {
  coachId: "5de8a6998057024270ccd1e4",
  user: {
    userId: "5db2c468cfc74a983c8aeb22",
    uid: "LV_wbzh2jztx7",
    nickname: "test22_user",
    email: "test22_user@test.test",
    profileImage: "dev/images/user/5db2c469cfc74a983c8aebba_1616569950138_1616569950593.jpg",
    backgroundImageUrl: null,
    isEmailVerified: true,
    emailVerifiedDatetime: 1574215194216,
    selfVerifiedDatetime: null,
    point: 0,
    recordsCount: 1,
    prizesCount: 2,
    tournamentsCount: 3,
    statsUpdateDatetime: 1574215194216,
    state: "NORMAL",
    isNormal: true,
    isTermsAgree: true,
    joinedDatetime: 1543245074991,
    mustRetryVerification: false
  },
  tags: [
    "OFFICIAL",
    "OTP"
  ],
  gameId: "5e1d9c64f711ba829bcc4c8c",
  rank: {
    code: "MASTER",
    logoUrl: "prod/images/thirdparty/riot/lol/Emblem_Master.png"
  },
  reviewRating: 4.5,
  reviewCount: 6,
  isAdvertising: true,
  isLiked: false,
  mainHistory: [
    "누적 수강생 200명 이상",
    "다수 시즌 솔로 랭크 챌린저 달성 경험 (시즌 3,5,6,8)"
  ],
  status: "OFFLINE",
  recommendLessonPrice: 100
}


const Template = (args, {argTypes}) => ({
  components: {CoachCardPreview},
  props: Object.keys(argTypes),
  template: `<CoachCardPreview v-bind="$props" />`,
});

export const CoachCardPreviewStory = Template.bind({});
CoachCardPreviewStory.args = {coachInfo, rank};