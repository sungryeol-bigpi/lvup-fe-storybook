import AnswerAvatars from '@/views/components/coaching/question/AnswerAvatars.vue';

export default {
  title: "coaching/question/AnswerAvatars",
  component: AnswerAvatars,
  parameters: {
    backgrounds: { default: "coach-grey" },
  },
};

const Template = (args, { argTypes }) => ({
  components: { AnswerAvatars },
  props: Object.keys(argTypes),
  template: `<AnswerAvatars v-bind="$props">`,
});

export const CaseA = Template.bind({});
CaseA.args = {
	thumbnailCoaches: [
		{
			"userId": "5db2c465cfc74a983c8ae9a6",
			"coachId": "5de8a6998057024270ccd1e2",
			"nickname": "test2_Coach_Chorong",
			"profileImage": "dev/images/user/5db2c465cfc74a983c8ae9a6_1629351300109_1629351300827.jpg"
		},
		{
			"userId": "5db2c464cfc74a983c8ae993",
			"coachId": "5de8a6998057024270ccd1e1",
			"nickname": "test1_user",
			"profileImage": "dev/images/user/5db2c469cfc74a983c8aebba_1616569950138_1616569950593.jpg"
		},
		{
			"userId": "5bfb8e82af69250f6d258157",
			"coachId": "5de8a6998057024270ccd1e0",
			"nickname": "LVUP_help12",
			"profileImage": "dev/images/user/5bfb8e82af69250f6d258157_1624975419859_1624975420378.png"
		}
	]
}

export const ExceedLength = Template.bind({})
ExceedLength.args = {
	thumbnailCoaches: [
		{
			"userId": "5db2c465cfc74a983c8ae9a6",
			"coachId": "5de8a6998057024270ccd1e2",
			"nickname": "test2_Coach_Chorong",
			"profileImage": "dev/images/user/5db2c465cfc74a983c8ae9a6_1629351300109_1629351300827.jpg"
		},
		{
			"userId": "5db2c465cfc74a983c8ae9a6",
			"coachId": "5de8a6998057024270ccd1e2",
			"nickname": "test2_Coach_Chorong",
			"profileImage": "dev/images/user/5db2c465cfc74a983c8ae9a6_1629351300109_1629351300827.jpg"
		},
		{
			"userId": "5db2c465cfc74a983c8ae9a6",
			"coachId": "5de8a6998057024270ccd1e2",
			"nickname": "test2_Coach_Chorong",
			"profileImage": "dev/images/user/5db2c465cfc74a983c8ae9a6_1629351300109_1629351300827.jpg"
		},
		{
			"userId": "5bfb8e82af69250f6d258157",
			"coachId": "5de8a6998057024270ccd1e0",
			"nickname": "LVUP_help12",
			"profileImage": "dev/images/user/5bfb8e82af69250f6d258157_1624975419859_1624975420378.png"
		},
		{
			"userId": "5db2c464cfc74a983c8ae993",
			"coachId": "5de8a6998057024270ccd1e1",
			"nickname": "test1_user",
			"profileImage": "dev/images/user/5db2c469cfc74a983c8aebba_1616569950138_1616569950593.jpg"
		}
	]
}