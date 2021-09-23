import QuestionPreview from "@/views/components/coaching/question/QuestionPreview.vue";

export default {
  title: "coaching/question/QuestionPreview",
  component: QuestionPreview,
  parameters: {
    backgrounds: { default: "coach-grey" },
  },
};

const Template = (args, { argTypes }) => ({
  components: { QuestionPreview },
  props: Object.keys(argTypes),
  template: `<QuestionPreview v-bind="$props" />`,
});

export const Clickable = Template.bind({});
Clickable.args = { clickable: true };

export const CaseA = Template.bind({});
CaseA.args = {
  question: {
    question: {
      boardWriteId: "60406c100e1aae00018e042d",
      title: "챔프에 대해서 궁금한 점이 있습니다.",
      content: "꼭 알고 싶습니다.",
      imageUrls: [],
      user: {
        userId: "5c048d7efb1a87695c765cba",
        uid: "LV_zoshvug9s8",
        nickname: "railg_gm",
        email: "railguns@gmail.com",
        profileImage:
          "dev/images/user/5c048d7efb1a87695c765cba_1607056860036_1607056860085.jpg",
        backgroundImageUrl: null,
        isEmailVerified: true,
        emailVerifiedDatetime: 1617343966669,
        selfVerifiedDatetime: null,
        point: 45,
        recordsCount: 0,
        prizesCount: 1,
        tournamentsCount: 3,
        statsUpdateDatetime: 1567704543158,
        state: "NORMAL",
        isNormal: true,
        isTermsAgree: true,
        joinedDatetime: 1543834638377,
        mustRetryVerification: false,
      },
      rank: {
        code: "UNRANKED",
        logoUrl: "prod/images/thirdparty/riot/lol/Emblem_UnRanked.png",
      },
      usePrivateName: false,
      hasMyAnswer: false,
      hasScraped: true,
      categories: [
        {
          groupName: "LOL_LANE",
          value: "MID",
          text: "미드",
          seq: 0,
        },
        {
          groupName: "LOL_CHAMPION",
          value: "Galio",
          text: "갈리오",
          seq: 0,
        },
      ],
      createdDatetime: 1614834704636,
    },
    previewAnswer: {
      representativeAnswer: {
        coach: {
          coachId: "5de8a6998057024270ccd1e3",
          user: {
            userId: "5db2c468cfc74a983c8aeb0f",
            uid: "LV_9pewtbotem",
            nickname: "test21_user",
            email: "test21_user@test.test",
            profileImage:
              "dev/images/user/5db2c469cfc74a983c8aebba_1616569950138_1616569950593.jpg",
            backgroundImageUrl: null,
            isEmailVerified: true,
            emailVerifiedDatetime: 1617011045358,
            selfVerifiedDatetime: null,
            point: 0,
            recordsCount: 1,
            prizesCount: 1,
            tournamentsCount: 2,
            statsUpdateDatetime: 1574215193998,
            state: "NORMAL",
            isNormal: true,
            isTermsAgree: true,
            joinedDatetime: 1543245074991,
            mustRetryVerification: false,
          },
          tags: ["PARTNER"],
          gameId: "5e1d9c64f711ba829bcc4c8c",
          rank: {
            code: "MASTER",
            logoUrl: "prod/images/thirdparty/riot/lol/Emblem_Master.png",
          },
          reviewRating: 4.5,
          reviewCount: 4,
          isAdvertising: true,
          isLiked: false,
          mainHistory: [
            "LOL을 잘하고 싶은 롤 초보, 저티어 분들을 위한 코치",
            "게임의 기초,기본기를 갖추기 좋은 맞춤형 강의",
          ],
          status: "OFFLINE",
          recommendLessonPrice: 100,
        },
        answer: {
          boardCommentId: "611e4b28438d5f00018e8176",
          boardWriteId: "60406c100e1aae00018e042d",
          commenter: {
            userId: "5db2c468cfc74a983c8aeb0f",
            uid: "LV_9pewtbotem",
            nickname: "test21_user",
            email: "test21_user@test.test",
            profileImage:
              "dev/images/user/5db2c469cfc74a983c8aebba_1616569950138_1616569950593.jpg",
            backgroundImageUrl: null,
            isEmailVerified: true,
            emailVerifiedDatetime: 1617011045358,
            selfVerifiedDatetime: null,
            point: 0,
            recordsCount: 1,
            prizesCount: 1,
            tournamentsCount: 2,
            statsUpdateDatetime: 1574215193998,
            state: "NORMAL",
            isNormal: true,
            isTermsAgree: true,
            joinedDatetime: 1543245074991,
            mustRetryVerification: false,
          },
          content:
            "안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요??안녕하세요",
          like: 0,
          dislike: 0,
          createdDatetime: 1629375272115,
        },
      },
      thumbnailCoaches: [
        {
          userId: "5db2c464cfc74a983c8ae993",
          coachId: "5de8a6998057024270ccd1e1",
          nickname: "test1_user",
          profileImage:
            "dev/images/user/5db2c469cfc74a983c8aebba_1616569950138_1616569950593.jpg",
        },
        {
          userId: "5db2c464cfc74a983c8ae993",
          coachId: "5de8a6998057024270ccd1e1",
          nickname: "test1_user",
          profileImage:
            "dev/images/user/5db2c469cfc74a983c8aebba_1616569950138_1616569950593.jpg",
        },
        {
          userId: "5db2c464cfc74a983c8ae993",
          coachId: "5de8a6998057024270ccd1e1",
          nickname: "test1_user",
          profileImage:
            "dev/images/user/5db2c469cfc74a983c8aebba_1616569950138_1616569950593.jpg",
        },
        {
          userId: "5db2c465cfc74a983c8ae9a6",
          coachId: "5de8a6998057024270ccd1e2",
          nickname: "test2_Coach_Chorong",
          profileImage:
            "dev/images/user/5db2c465cfc74a983c8ae9a6_1629351300109_1629351300827.jpg",
        },
        {
          userId: "5bfb8e82af69250f6d258157",
          coachId: "5de8a6998057024270ccd1e0",
          nickname: "LVUP_help12",
          profileImage:
            "dev/images/user/5bfb8e82af69250f6d258157_1624975419859_1624975420378.png",
        },
        {
          userId: "5bfb8e82af69250f6d258157",
          coachId: "5de8a6998057024270ccd1e0",
          nickname: "LVUP_help12",
          profileImage:
            "dev/images/user/5bfb8e82af69250f6d258157_1624975419859_1624975420378.png",
        },
        {
          userId: "5bfb8e82af69250f6d258157",
          coachId: "5de8a6998057024270ccd1e0",
          nickname: "LVUP_help12",
          profileImage:
            "dev/images/user/5bfb8e82af69250f6d258157_1624975419859_1624975420378.png",
        },
      ],
    },
  },
};

export const CaseB = Template.bind({});
CaseB.args = {
  question: {
    question: {
      boardWriteId: "610ce380ba448a00016e1fc1",
      title: "이미지업로드테스틍",
      content: "ㅇㄹㅇㄹㅇㄹㅇㄹㅇㄹ",
      imageUrls: [
        "dev/images/coaching/5c048d7efb1a87695c765cba_1628234619385_1628234619418.png",
      ],
      user: {
        userId: "5c048d7efb1a87695c765cba",
        uid: "LV_zoshvug9s8",
        nickname: "railg_gm",
        email: "railguns@gmail.com",
        profileImage:
          "dev/images/user/5c048d7efb1a87695c765cba_1607056860036_1607056860085.jpg",
        backgroundImageUrl: null,
        isEmailVerified: true,
        emailVerifiedDatetime: 1617343966669,
        selfVerifiedDatetime: null,
        point: 45,
        recordsCount: 0,
        prizesCount: 1,
        tournamentsCount: 3,
        statsUpdateDatetime: 1567704543158,
        state: "NORMAL",
        isNormal: true,
        isTermsAgree: true,
        joinedDatetime: 1543834638377,
        mustRetryVerification: false,
      },
      rank: {
        code: "MASTER_I",
        logoUrl: "prod/images/thirdparty/riot/lol/Emblem_Master.png",
      },
      usePrivateName: false,
      hasMyAnswer: false,
      hasScraped: false,
      categories: [
        {
          groupName: "LOL_LANE",
          value: "ALL",
          text: "상관 없음",
          seq: 0,
        },
        {
          groupName: "LOL_CHAMPION",
          value: "Garen",
          text: "가렌",
          seq: 0,
        },
      ],
      createdDatetime: 1628234624942,
    },
    previewAnswer: {
      representativeAnswer: {
        coach: {
          coachId: "5de8a6998057024270ccd1e3",
          user: {
            userId: "5db2c468cfc74a983c8aeb0f",
            uid: "LV_9pewtbotem",
            nickname: "test21_user",
            email: "test21_user@test.test",
            profileImage:
              "dev/images/user/5db2c469cfc74a983c8aebba_1616569950138_1616569950593.jpg",
            backgroundImageUrl: null,
            isEmailVerified: true,
            emailVerifiedDatetime: 1617011045358,
            selfVerifiedDatetime: null,
            point: 0,
            recordsCount: 1,
            prizesCount: 1,
            tournamentsCount: 2,
            statsUpdateDatetime: 1574215193998,
            state: "NORMAL",
            isNormal: true,
            isTermsAgree: true,
            joinedDatetime: 1543245074991,
            mustRetryVerification: false,
          },
          tags: ["PARTNER"],
          gameId: "5e1d9c64f711ba829bcc4c8c",
          rank: {
            code: "MASTER",
            logoUrl: "prod/images/thirdparty/riot/lol/Emblem_Master.png",
          },
          reviewRating: 4.5,
          reviewCount: 4,
          isAdvertising: true,
          isLiked: false,
          mainHistory: [
            "LOL을 잘하고 싶은 롤 초보, 저티어 분들을 위한 코치",
            "게임의 기초,기본기를 갖추기 좋은 맞춤형 강의",
          ],
          status: "OFFLINE",
          recommendLessonPrice: 100,
        },
        answer: {
          boardCommentId: "611e4929438d5f00018e8175",
          boardWriteId: "610ce380ba448a00016e1fc1",
          commenter: {
            userId: "5db2c468cfc74a983c8aeb0f",
            uid: "LV_9pewtbotem",
            nickname: "test21_user",
            email: "test21_user@test.test",
            profileImage:
              "dev/images/user/5db2c469cfc74a983c8aebba_1616569950138_1616569950593.jpg",
            backgroundImageUrl: null,
            isEmailVerified: true,
            emailVerifiedDatetime: 1617011045358,
            selfVerifiedDatetime: null,
            point: 0,
            recordsCount: 1,
            prizesCount: 1,
            tournamentsCount: 2,
            statsUpdateDatetime: 1574215193998,
            state: "NORMAL",
            isNormal: true,
            isTermsAgree: true,
            joinedDatetime: 1543245074991,
            mustRetryVerification: false,
          },
          content:
            "이것은 댃글 펼침입ㄴ디ㅏ.이것은 댃글 펼침입ㄴ디ㅏ.이것은 댃글 펼침입ㄴ디ㅏ.\n\n\n이것은 댃글 펼침입ㄴ디ㅏ.이것은 댃글 펼침입ㄴ디ㅏ.이것은 댃글 펼침입ㄴ디ㅏ.이것은 댃글 펼침입ㄴ디ㅏ.이것은 댃글 펼침입ㄴ디ㅏ.이것은 댃글 펼침입ㄴ디ㅏ.\n\n\n이것은 댃글 펼침입ㄴ디ㅏ.이것은 댃글 펼침입ㄴ디ㅏ.이것은 댃글 펼침입ㄴ디ㅏ.이것은 댃글 펼침입ㄴ디ㅏ.이것은 댃글 펼침입ㄴ디ㅏ.이것은 댃글 펼침입ㄴ디ㅏ.\n\n\n이것은 댃글 펼침입ㄴ디ㅏ.이것은 댃글 펼침입ㄴ디ㅏ.이것은 댃글 펼침입ㄴ디ㅏ.",
          like: 0,
          dislike: 0,
          createdDatetime: 1629374761937,
        },
      },
      thumbnailCoaches: [
        {
          userId: "5db2c465cfc74a983c8ae9a6",
          coachId: "5de8a6998057024270ccd1e2",
          nickname: "test2_Coach_Chorong",
          profileImage:
            "dev/images/user/5db2c465cfc74a983c8ae9a6_1629351300109_1629351300827.jpg",
        },
      ],
    },
  },
};

export const ShortAnswer = Template.bind({});
ShortAnswer.args = {
  question: {
    question: {
      boardWriteId: "610ce380ba448a00016e1fc1",
      title: "이미지업로드테스틍",
      content: "ㅇㄹㅇㄹㅇㄹㅇㄹㅇㄹ",
      imageUrls: [
        "dev/images/coaching/5c048d7efb1a87695c765cba_1628234619385_1628234619418.png",
      ],
      user: {
        userId: "5c048d7efb1a87695c765cba",
        uid: "LV_zoshvug9s8",
        nickname: "railg_gm",
        email: "railguns@gmail.com",
        profileImage:
          "dev/images/user/5c048d7efb1a87695c765cba_1607056860036_1607056860085.jpg",
        backgroundImageUrl: null,
        isEmailVerified: true,
        emailVerifiedDatetime: 1617343966669,
        selfVerifiedDatetime: null,
        point: 45,
        recordsCount: 0,
        prizesCount: 1,
        tournamentsCount: 3,
        statsUpdateDatetime: 1567704543158,
        state: "NORMAL",
        isNormal: true,
        isTermsAgree: true,
        joinedDatetime: 1543834638377,
        mustRetryVerification: false,
      },
      rank: {
        code: "MASTER_I",
        logoUrl: "prod/images/thirdparty/riot/lol/Emblem_Master.png",
      },
      usePrivateName: false,
      hasMyAnswer: false,
      hasScraped: false,
      categories: [
        {
          groupName: "LOL_LANE",
          value: "ALL",
          text: "상관 없음",
          seq: 0,
        },
        {
          groupName: "LOL_CHAMPION",
          value: "Garen",
          text: "가렌",
          seq: 0,
        },
      ],
      createdDatetime: 1628234624942,
    },
    previewAnswer: {
      representativeAnswer: {
        coach: {
          coachId: "5de8a6998057024270ccd1e3",
          user: {
            userId: "5db2c468cfc74a983c8aeb0f",
            uid: "LV_9pewtbotem",
            nickname: "test21_user",
            email: "test21_user@test.test",
            profileImage:
              "dev/images/user/5db2c469cfc74a983c8aebba_1616569950138_1616569950593.jpg",
            backgroundImageUrl: null,
            isEmailVerified: true,
            emailVerifiedDatetime: 1617011045358,
            selfVerifiedDatetime: null,
            point: 0,
            recordsCount: 1,
            prizesCount: 1,
            tournamentsCount: 2,
            statsUpdateDatetime: 1574215193998,
            state: "NORMAL",
            isNormal: true,
            isTermsAgree: true,
            joinedDatetime: 1543245074991,
            mustRetryVerification: false,
          },
          tags: ["PARTNER"],
          gameId: "5e1d9c64f711ba829bcc4c8c",
          rank: {
            code: "MASTER",
            logoUrl: "prod/images/thirdparty/riot/lol/Emblem_Master.png",
          },
          reviewRating: 4.5,
          reviewCount: 4,
          isAdvertising: true,
          isLiked: false,
          mainHistory: [
            "LOL을 잘하고 싶은 롤 초보, 저티어 분들을 위한 코치",
            "게임의 기초,기본기를 갖추기 좋은 맞춤형 강의",
          ],
          status: "OFFLINE",
          recommendLessonPrice: 100,
        },
        answer: {
          boardCommentId: "611e4929438d5f00018e8175",
          boardWriteId: "610ce380ba448a00016e1fc1",
          commenter: {
            userId: "5db2c468cfc74a983c8aeb0f",
            uid: "LV_9pewtbotem",
            nickname: "test21_user",
            email: "test21_user@test.test",
            profileImage:
              "dev/images/user/5db2c469cfc74a983c8aebba_1616569950138_1616569950593.jpg",
            backgroundImageUrl: null,
            isEmailVerified: true,
            emailVerifiedDatetime: 1617011045358,
            selfVerifiedDatetime: null,
            point: 0,
            recordsCount: 1,
            prizesCount: 1,
            tournamentsCount: 2,
            statsUpdateDatetime: 1574215193998,
            state: "NORMAL",
            isNormal: true,
            isTermsAgree: true,
            joinedDatetime: 1543245074991,
            mustRetryVerification: false,
          },
          content:
            "짧은 답변.",
          like: 0,
          dislike: 0,
          createdDatetime: 1629374761937,
        },
      },
      thumbnailCoaches: [
        {
          userId: "5db2c465cfc74a983c8ae9a6",
          coachId: "5de8a6998057024270ccd1e2",
          nickname: "test2_Coach_Chorong",
          profileImage:
            "dev/images/user/5db2c465cfc74a983c8ae9a6_1629351300109_1629351300827.jpg",
        },
      ],
    },
  },
};

export const NoAnswer = Template.bind({});
NoAnswer.args = {
  question: {
    question: {
      boardWriteId: "610ce380ba448a00016e1fc1",
      title: "이미지업로드테스틍",
      content: "ㅇㄹㅇㄹㅇㄹㅇㄹㅇㄹ",
      imageUrls: [
        "dev/images/coaching/5c048d7efb1a87695c765cba_1628234619385_1628234619418.png",
      ],
      user: {
        userId: "5c048d7efb1a87695c765cba",
        uid: "LV_zoshvug9s8",
        nickname: "railg_gm",
        email: "railguns@gmail.com",
        profileImage:
          "dev/images/user/5c048d7efb1a87695c765cba_1607056860036_1607056860085.jpg",
        backgroundImageUrl: null,
        isEmailVerified: true,
        emailVerifiedDatetime: 1617343966669,
        selfVerifiedDatetime: null,
        point: 45,
        recordsCount: 0,
        prizesCount: 1,
        tournamentsCount: 3,
        statsUpdateDatetime: 1567704543158,
        state: "NORMAL",
        isNormal: true,
        isTermsAgree: true,
        joinedDatetime: 1543834638377,
        mustRetryVerification: false,
      },
      rank: {
        code: "MASTER_I",
        logoUrl: "prod/images/thirdparty/riot/lol/Emblem_Master.png",
      },
      usePrivateName: false,
      hasMyAnswer: false,
      hasScraped: false,
      categories: [
        {
          groupName: "LOL_LANE",
          value: "ALL",
          text: "상관 없음",
          seq: 0,
        },
        {
          groupName: "LOL_CHAMPION",
          value: "Garen",
          text: "가렌",
          seq: 0,
        },
      ],
      createdDatetime: 1628234624942,
    },
  },
};