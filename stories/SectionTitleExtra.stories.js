import SectionTitleExtra from '@/views/components/coaching/SectionTitleExtra.vue'

export default {
  title: "coaching/SectionTitleExtra",
  component: SectionTitleExtra,
  parameters: {
    backgrounds: { default: "coach-grey" },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SectionTitleExtra },
  props: Object.keys(argTypes).filter(k => k !== 'title'),
	computed: {
		title() {
			return args.title
		}
	},
  template: `<SectionTitleExtra v-bind="$props">{{title}}</SectionTitle>`,
});

export const CaseA = Template.bind({});
CaseA.args = {
	title: '샘플'
};

