import CoachListItem from "@/views/components/coaching/coachList/CoachListItem.vue";

export default {
  title: "coaching/coachList/CoachListItem",
  component: CoachListItem,
};

const data = {
  coach: {"coachId":"5de8a6998057024270ccd1e1","user":{"userId":"5db2c464cfc74a983c8ae993","uid":"LV_yabap60ie9","nickname":"test1_user","email":"test1_user@test.test","profileImage":"dev/images/user/5db2c469cfc74a983c8aebba_1616569950138_1616569950593.jpg","backgroundImageUrl":null,"isEmailVerified":true,"emailVerifiedDatetime":1614336156093,"selfVerifiedDatetime":null,"point":5,"recordsCount":4,"prizesCount":2,"tournamentsCount":12,"statsUpdateDatetime":1578421803485,"state":"NORMAL","isNormal":true,"isTermsAgree":true,"joinedDatetime":1543245074991,"mustRetryVerification":false},"tags":["PARTNER","PRO"],"gameId":"5e1d9c64f711ba829bcc4c8c","rank":{"code":"DIAMOND_4","logoUrl":"prod/images/thirdparty/riot/lol/Emblem_Diamond.png"},"reviewRating":4.5,"reviewCount":18,"isAdvertising":false,"isLiked":true,"mainHistory":["프로 코치","xvsdfsdffsd"],"status":"OFFLINE","recommendLessonPrice":3000}
}
const Template = (args) => ({
  components: {CoachListItem},
  props: Object.keys(args),
  template: `<CoachListItem v-bind="$props" />`,
});

export const CoachListItemStory = Template.bind();
CoachListItemStory.args = data;