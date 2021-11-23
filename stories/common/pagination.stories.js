import Pagination from '@/views/components/common/Pagination.vue';

export default {
  title: "coaching/common/Pagination",
  component: Pagination,
};

const Template = (args, {argTypes}) => ({
  components: {Pagination},
  props: Object.keys(argTypes),
  template: `<Pagination v-bind="$props" />`
})

export const Base = Template.bind({})
Base.args = {
	info: {
		totalCount: 88,
		currentCursor: 0,
		hasNext:true,
		nextCursor: 2,
		items: Array.from({length: 88}).map((_, i) => i),
	},
	chunkSize: 10,
	showSize: 10,
}

export const CoachingDefault = Template.bind({})
CoachingDefault.args = {
	theme: 'coaching',
	info: {
		totalCount: 88,
		currentCursor: 0,
		hasNext:true,
		nextCursor: 2,
		items: Array.from({length: 88}).map((_, i) => i),
	},
	chunkSize: 10,
	showSize: 10,
}
