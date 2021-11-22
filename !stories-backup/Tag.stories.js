import Tag from '@/views/components/coaching/Tag.vue';

export default {
  title: "coaching/user/Tag",
  component: Tag,
  parameters: {
    backgrounds: { default: "coach-grey" },
  },
};

const Template = (args, { argTypes }) => ({
  components: { Tag },
  props: Object.keys(argTypes).filter(k => k !== 'content'),
  template: `<Tag v-bind="$props">${args.content || ''}</Tag>`,
});

export const Empty = Template.bind({});

export const SampleText = Template.bind({});
SampleText.args = { content: 'SampleText' };

export const SampleList = () => ({
	components: {Tag},
	template: `<ul><tag>아이템1</tag><tag>탑</tag><tag>그웬</tag></ul>`
})