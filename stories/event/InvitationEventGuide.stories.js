import InvitationEventGuide from '@/views/components/coaching/event/InvitationEventGuide.vue'

export default {
  title: "coaching/event/InvitationEventGuide",
  component: InvitationEventGuide,
};

const Template = (args) => ({
  components: {InvitationEventGuide},
  props: Object.keys(args),
  template: `<InvitationEventGuide v-bind="$props"><InvitationEventGuide />`,
});

export const InvitationEventGuideStory = Template.bind();