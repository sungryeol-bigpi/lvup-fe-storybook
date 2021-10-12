import CoachTvRelatedList from "@/views/components/coaching/coachTv/CoachTvRelatedList.vue";

export default {
  title: "coaching/CoachTv/CoachTvRelatedList",
  component: CoachTvRelatedList,
};

const data = {
  contentList: {
    "hasNext": true,
    "totalCount": 14,
    "items": [{
      "tvContentId": "60b9c42ee81bfc0001874b3b",
      "tvContentProviderId": "60b991e6d227ec1bf2e74b59",
      "tvContentGroup": {
        "tvContentGroupId": "60b8580124c52433b2eed8bd",
        "tvContentProviderId": "60b991e6d227ec1bf2e74b59",
        "title": "라이브 피드백",
        "description": "라이브방송?",
        "viewOrderOfContentProvider": 3
      },
      "platformType": "YOUTUBE",
      "title": "[PS아카데미] 라이브 피드백_서폿편_1화",
      "contentUrl": "https://www.youtube.com/embed/P9UB3Eb9WJ0?enablejsapi=1",
      "thumbnailUrl": "dev/images/tv/content/1622787118113.jpg",
      "contentCreatedDatetime": 1614519710000,
      "createdDatetime": 1622787118282
    }, {
      "tvContentId": "60b9c415e81bfc0001874b39",
      "tvContentProviderId": "60b991e6d227ec1bf2e74b59",
      "tvContentGroup": {
        "tvContentGroupId": "60b8580124c52433b2eed8bd",
        "tvContentProviderId": "60b991e6d227ec1bf2e74b59",
        "title": "라이브 피드백",
        "description": "라이브방송?",
        "viewOrderOfContentProvider": 3
      },
      "platformType": "YOUTUBE",
      "title": "[PS아카데미] 라이브 피드백_정글편_2화",
      "contentUrl": "https://www.youtube.com/embed/SCmn9swwo4Q?enablejsapi=1",
      "thumbnailUrl": "dev/images/tv/content/1622787092627.jpg",
      "contentCreatedDatetime": 1615125628000,
      "createdDatetime": 1622787093669
    }, {
      "tvContentId": "60b9a63fd227ec2cf73d9f9d",
      "tvContentProviderId": "60b991e6d227ec1bf2e74b59",
      "tvContentGroup": {
        "tvContentGroupId": "60b8580124c52433b2eed8bd",
        "tvContentProviderId": "60b991e6d227ec1bf2e74b59",
        "title": "라이브 피드백",
        "description": "라이브방송?",
        "viewOrderOfContentProvider": 3
      },
      "platformType": "YOUTUBE",
      "title": "[PS아카데미] 라이브 피드백_미드편_3화",
      "contentUrl": "https://www.youtube.com/embed/3UyLGhX3LQc?&enablejsapi=1",
      "thumbnailUrl": "dev/images/tv/content/1622779454868.jpg",
      "contentCreatedDatetime": 1615730210000,
      "createdDatetime": 1622779455493
    }],
    "currentCursor": 0,
    "nextCursor": 1,
    "name": "relatedContentList"
  }
}

const Template = (args) => ({
  components: {CoachTvRelatedList},
  props: Object.keys(args),
  template: `<CoachTvRelatedList v-bind="$props" />`,
});

export const CoachTvRelatedListStory = Template.bind();
CoachTvRelatedListStory.args = data;
export const NoData = Template.bind();