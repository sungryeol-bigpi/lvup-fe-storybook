import CoachTvPlaylist from "@/views/components/coaching/CoachTvPlaylist.vue";

export default {
    title: "CoachTv/CoachTvPlaylist",
    component: CoachTvPlaylist,
};

const coachTvContentList = [
    {
        contentCreatedDatetime: 1615125628000,
        thumbnailUrl: "dev/images/tv/content/1622787092627.jpg",
        title: "[PS아카데미] 라이브 피드백_정글편_2화",
    },
    {
        contentCreatedDatetime: 1615125628000,
        thumbnailUrl: "dev/images/tv/content/1622787092627.jpg",
        title: "[PS아카데미] 라이브 피드백_정글편_2화PS아카데미] 라이브 피드백_정글편_2화PPS아카데미] 라이브 피드백_정글편_2화PS아카데미] 라이브 피드백_정글편_2화PS아카데미] 라이브 피드백_정글편_2화PS아카데미] 라이브 피드백_정글편_2화PS아카데미] 라이브 피드백_정글편_2화PS아카데미] 라이브 피드백_정글편_2화PS아카데미] 라이브 피드백_정글편_2화PS아카데미] 라이브 피드백_정글편_2화PS아카데미] 라이브 피드백_정글편_2화S아카데미] 라이브 피드백_정글편_2화PS아카데미] 라이브 피드백_정글편_2화",
    }
    ,
    {
        contentCreatedDatetime: 1615125628000,
        thumbnailUrl: "dev/images/tv/content/1622787092627.jpg",
        title: "[PS아카데미] 라이브 피드백_정글편_2화",
    },
    {
        contentCreatedDatetime: 1615125628000,
        thumbnailUrl: "dev/images/tv/content/1622787092627.jpg",
        title: "[PS아카데미] 라이브 피드백_정글편_2화",
    }
]


const Template = (args) => ({
    components: {CoachTvPlaylist},
    props: Object.keys(args),
    template: `<CoachTvPlaylist v-bind="$props" />`,
});

export const CoachTvPlaylistStory = Template.bind({});
CoachTvPlaylistStory.args = {contentList: coachTvContentList};