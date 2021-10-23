export default [
	{
		coupon: {
			couponId: '60ed0c76afd2daa9a95b8ce4',
			title: '첫 수업 무료 수강권', // 쿠폰명
			description: '최대 2,000UP 할인', // 쿠폰 설명
			startDateTime: null, // 시작시간 null이면 제한없음
			endDateTime: 1627570800000, // 만료시간 null이면 제한없음
		},
		affectedAmount: 1000, // 쿠폰으로 할인받는 금액
		canUse: false, // 사용 가능 여부
	},
	{
		coupon: {
			couponId: '60ed0c76afd2daa9a95b8ce5',
			title: '모든 수업 50% 할인권',
			description: '최대 5,000UP 할인',
			startDateTime: null,
			endDateTime: 1627570800000,
		},
		affectedAmount: 500,
		canUse: false,
	},
	{
		coupon: {
			couponId: 'aaaaa',
			title: '첫 수업 무료 수강권', // 쿠폰명
			description: '최대 2,000UP 할인', // 쿠폰 설명
			startDateTime: null, // 시작시간 null이면 제한없음
			endDateTime: new Date('2020-01-01').getTime(), // 만료시간 null이면 제한없음
		},
		affectedAmount: 1000, // 쿠폰으로 할인받는 금액
		canUse: false, // 사용 가능 여부
	},
	{
		coupon: {
			couponId: 'bbbb',
			title: '모든 수업 50% 할인권',
			description: '최대 5,000UP 할인',
			startDateTime: null,
			endDateTime: new Date('2020-01-01').getTime(),
		},
		affectedAmount: 500,
		canUse: false,
	},
	{
		coupon: {
			couponId: 'ccccc',
			title: '무기한 수강권', // 쿠폰명
			description: '최대 2,000UP 할인', // 쿠폰 설명
			startDateTime: null, // 시작시간 null이면 제한없음
			endDateTime: null, // 만료시간 null이면 제한없음
		},
		affectedAmount: 1000, // 쿠폰으로 할인받는 금액
		canUse: true, // 사용 가능 여부
	},
	{
		coupon: {
			couponId: 'ccccc1',
			title: '기한이 있는 수강권', // 쿠폰명
			description: '최대 2,000UP 할인', // 쿠폰 설명
			startDateTime: null, // 시작시간 null이면 제한없음
			endDateTime: new Date('2022-01-01').getTime(), // 만료시간 null이면 제한없음
		},
		affectedAmount: 1000, // 쿠폰으로 할인받는 금액
		canUse: true, // 사용 가능 여부
	},
	{
		coupon: {
			couponId: 'ddddd',
			title: '모든 수업 50% 할인권b',
			description: '최대 5,000UP 할인',
			startDateTime: null,
			endDateTime: 1627570800000,
		},
		affectedAmount: 500,
		canUse: false,
	},
	{
		coupon: {
			couponId: 'ddddd1',
			title: '모든 수업 50% 할인권c',
			description: '최대 5,000UP 할인',
			startDateTime: null,
			endDateTime: new Date('2022-01-01').getTime(),
		},
		affectedAmount: 500,
		canUse: true,
	},
	{
		coupon: {
			couponId: 'ddddd2',
			title: '모든 수업 50% 할인권c',
			description: '최대 5,000UP 할인',
			startDateTime: null,
			endDateTime: new Date('2022-01-01').getTime(),
		},
		affectedAmount: 250,
		canUse: true,
	},
	{
		coupon: {
			couponId: 'ddddd3',
			title: '모든 수업 50% 할인권d',
			description: '최대 5,000UP 할인',
			startDateTime: null,
			endDateTime: new Date('2022-01-02').getTime(),
		},
		affectedAmount: 500,
		canUse: true,
	},
]