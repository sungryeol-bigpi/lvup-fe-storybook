import InvitationEventModal from '@/views/components/coaching/event/InvitationEventModal.vue'

export default {
  title: "coaching/event/InvitationEventModal",
  component: InvitationEventModal,
};

const Template = (args) => ({
  components: {InvitationEventModal},
  props: Object.keys(args),
  template: `
<InvitationEventModal v-bind="$props"><InvitationEventModal />`,
});

export const InvitationEventModalStory = Template.bind();