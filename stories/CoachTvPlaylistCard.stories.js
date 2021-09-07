import CoachTvPlaylistCard from "@/views/components/coaching/CoachTvPlaylistCard.vue";

export default {
    title: "coaching/CoachTv/CoachTvPlaylistCard",
    component: CoachTvPlaylistCard,
};

const coachTvContent = {
    dateTime: 1615125628000,
    thumbnailUrl: "dev/images/tv/content/1622787092627.jpg",
    title: "[PS아카데미] 라이브 피드백_정글편_2화",
}
const Template = (args) => ({
    components: {CoachTvPlaylistCard},
    props: Object.keys(args),
    template: `<CoachTvPlaylistCard v-bind="$props" />`,
});

export const CoachTvPlaylistCardStory = Template.bind();
CoachTvPlaylistCardStory.args = coachTvContent;