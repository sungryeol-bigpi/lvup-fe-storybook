import LessonOrder from "@/views/components/coaching/user/LessonOrder.vue";

export default {
  title: "coaching/user/LessonOrder",
  component: LessonOrder,
  parameters: {
    backgrounds: { default: "coach-grey" },
  },
};

const Template = (args, { argTypes }) => ({
  components: { LessonOrder },
  props: Object.keys(argTypes),
  template: `<LessonOrder v-bind="$props" />`,
});

export const Empty = Template.bind({});
Empty.args = {};

export const EndWithReview = Template.bind({});
EndWithReview.args = {
	value: {
		"lessonProductOrderId": "606c19fb1be8fc0001f8c601",
		"bundleSize": 1,
		"price": 100,
		"resultPrice": 100,
		"status": "END",
		"buyDateTime": 1617697275983,
		"startDateTime": 1617697289933,
		"endDateTime": 1617697303163,
		"coach": {
			"coachId": "5de8a6998057024270ccd1e7",
			"user": {
				"userId": "5db2c468cfc74a983c8aeb6e",
				"uid": "LV_wgjepzgatg",
				"nickname": "test26_user",
				"email": "test26_user@test.test",
				"profileImage": "dev/images/user/5db2c469cfc74a983c8aebba_1616569950138_1616569950593.jpg",
				"backgroundImageUrl": null,
				"isEmailVerified": true,
				"emailVerifiedDatetime": 1574215195302,
				"selfVerifiedDatetime": null,
				"point": 0,
				"recordsCount": 1,
				"prizesCount": 1,
				"tournamentsCount": 2,
				"statsUpdateDatetime": 1574215195302,
				"state": "NORMAL",
				"isNormal": true,
				"isTermsAgree": true,
				"joinedDatetime": 1543245074991,
				"mustRetryVerification": false
			},
			"tags": [
				"PARTNER",
				"OTP"
			],
			"gameId": "5e1d9c64f711ba829bcc4c8c",
			"rank": {
				"code": "MASTER",
				"logoUrl": "prod/images/thirdparty/riot/lol/Emblem_Master.png"
			},
			"reviewRating": 3.9,
			"reviewCount": 10,
			"isAdvertising": false,
			"isLiked": false,
			"mainHistory": [
				"現 게임코치아카데미 리그오브레전드 헤드코치",
				"프로관전러P.S PS 아카데미 피드백 코치"
			],
			"status": "OFFLINE",
			"recommendLessonPrice": 100
		},
		"lesson": {
			"lessonId": "603f2cdef2ad270001cfb49b",
			"name": "1:1 라인전 코칭",
			"description": [
				{
					"thumbnailUrl": "dev/images/lesson/1614753748019.png",
					"description": "사용자 설정 게임에서 코치님과 만납니다.",
					"shortDescription": "사용자 설정 게임에서 코치님과 만납니다."
				},
				{
					"thumbnailUrl": "dev/images/lesson/1614753748280.png",
					"description": "인게임 1:1 라인전 상황에서 코칭해 드립니다.",
					"shortDescription": "인게임 1:1 라인전 상황에서 코칭해 드립니다."
				},
				{
					"thumbnailUrl": "dev/images/lesson/1614753733851.png",
					"description": "게임이 종료된 후, 플레이를 간단히 한번 더 점검해 드립니다.",
					"shortDescription": "종료 후, 플레이를 한번 더 점검해 드립니다."
				}
			],
			"duration": {
				"unit": "HOURS",
				"value": 1
			},
			"thumbnail": "images/lesson/img_lecture_lineplay.png"
		},
		"review": {
			"lessonReviewId": "606c1a251be8fc0001f8c607",
			"lessonProductOrderId": "606c19fb1be8fc0001f8c601",
			"lessonId": "603f2cdef2ad270001cfb49b",
			"coachId": "5de8a6998057024270ccd1e7",
			"user": {
				"userId": "5c048d7efb1a87695c765cba",
				"uid": "LV_zoshvug9s8",
				"nickname": "railg_gm",
				"email": "railguns@gmail.com",
				"profileImage": "dev/images/user/5c048d7efb1a87695c765cba_1607056860036_1607056860085.jpg",
				"backgroundImageUrl": null,
				"isEmailVerified": true,
				"emailVerifiedDatetime": 1617343966669,
				"selfVerifiedDatetime": null,
				"point": 45,
				"recordsCount": 0,
				"prizesCount": 1,
				"tournamentsCount": 3,
				"statsUpdateDatetime": 1567704543158,
				"state": "NORMAL",
				"isNormal": true,
				"isTermsAgree": true,
				"joinedDatetime": 1543834638377,
				"mustRetryVerification": false
			},
			"description": "sdfdsf",
			"rating": 2.5,
			"writeDateTime": 1617697317911
		}
	} 
};


export const End = Template.bind({})
End.args = {
	value: {
		"lessonProductOrderId": "6048a60a1ad22c0001feda3b",
		"bundleSize": 1,
		"price": 100,
		"resultPrice": 0,
		"status": "END",
		"buyDateTime": 1615373834813,
		"startDateTime": 1615180939213,
		"endDateTime": 1615184857213,
		"coach": {
			"coachId": "5de8a6998057024270ccd1e0",
			"user": {
				"userId": "5bfb8e82af69250f6d258157",
				"uid": "LV_acjxa6kvtv",
				"nickname": "LVUP_help12",
				"email": "help@bigpi.co",
				"profileImage": "dev/images/user/5bfb8e82af69250f6d258157_1624975419859_1624975420378.png",
				"backgroundImageUrl": null,
				"isEmailVerified": true,
				"emailVerifiedDatetime": 1626871596697,
				"selfVerifiedDatetime": null,
				"point": 0,
				"recordsCount": 0,
				"prizesCount": 1,
				"tournamentsCount": 1,
				"statsUpdateDatetime": 1543245074998,
				"state": "NORMAL",
				"isNormal": true,
				"isTermsAgree": true,
				"joinedDatetime": 1543245074991,
				"mustRetryVerification": false
			},
			"tags": [
				"OFFICIAL",
				"PRO"
			],
			"gameId": "5e1d9c64f711ba829bcc4c8c",
			"rank": {
				"code": "MASTER",
				"logoUrl": "prod/images/thirdparty/riot/lol/Emblem_Master.png"
			},
			"reviewRating": 4.4,
			"reviewCount": 21,
			"isAdvertising": false,
			"isLiked": false,
			"mainHistory": [
				"이번 시즌 11 솔로 랭크 챌린저 달성",
				"다수 시즌 솔로 랭크 챌린저 달성 경험 (시즌 5,6)"
			],
			"status": "ONLINE",
			"recommendLessonPrice": 0
		},
		"lesson": {
			"lessonId": "603f2c79f2ad270001cfb49a",
			"name": "화면 공유로 실시간 코칭",
			"description": [
				{
					"thumbnailUrl": "dev/images/lesson/1614753748019.png",
					"description": "먼저 화면 공유를 시작 후, 게임을 플레이 합니다.",
					"shortDescription": "먼저 화면 공유를 시작 후, 게임을 플레이 합니다."
				},
				{
					"thumbnailUrl": "dev/images/lesson/1614753748280.png",
					"description": "게임 상황에 맞춰 실시간으로 플레이 방향을 코칭해 드립니다.",
					"shortDescription": "게임 상황에 맞춰 실시간으로 코칭해 드립니다."
				},
				{
					"thumbnailUrl": "dev/images/lesson/1614753733851.png",
					"description": "게임이 종료된 후, 리플레이를 통해 간단히 한번 더 점검해 드립니다.",
					"shortDescription": "종료 후, 리플레이를 통해 한번 더 점검해 드립니다."
				}
			],
			"duration": {
				"unit": "HOURS",
				"value": 1
			},
			"thumbnail": "images/lesson/img_lecture_sharescreen.png"
		},
		"review": null
	}
}