import InvitationEventInfoPanel from '@/views/components/coaching/event/InvitationEventInfoPanel.vue'

export default {
  title: "coaching/event/InvitationEventInfoPanel",
  component: InvitationEventInfoPanel,
};

const Template = (args) => ({
  components: {InvitationEventInfoPanel},
  props: Object.keys(args),
  template: `<InvitationEventInfoPanel v-bind="$props" />`,
});

export const InvitationEventInfoPanelStory = Template.bind();