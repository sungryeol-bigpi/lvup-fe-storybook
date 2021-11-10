import InvitationEventGuideAlt from '@/views/components/coaching/event/InvitationEventGuideAlt.vue'

export default {
  title: "coaching/event/InvitationEventGuideAlt",
  component: InvitationEventGuideAlt,
};

const Template = (args) => ({
  components: {InvitationEventGuideAlt},
  props: Object.keys(args),
  template: `<InvitationEventGuideAlt v-bind="$props"><InvitationEventGuideAlt />`,
});

export const InvitationEventGuideAltStory = Template.bind();