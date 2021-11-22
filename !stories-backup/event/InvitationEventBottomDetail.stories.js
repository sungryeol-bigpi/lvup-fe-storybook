import InvitationEventBottomDetail from '@/views/components/coaching/event/InvitationEventBottomDetail'

export default {
  title: "coaching/event/InvitationEventBottomDetail",
  component: InvitationEventBottomDetail,
};

const Template = (args) => ({
  components: {InvitationEventBottomDetail},
  props: Object.keys(args),
  template: `<InvitationEventBottomDetail v-bind="$props"><InvitationEventBottomDetail />`,
});

export const InvitationEventBottomDetailStory = Template.bind();