import InvitationEventMiddle from '@/views/components/coaching/event/InvitationEventMiddle.vue'

export default {
  title: "coaching/event/InvitationEventMiddle",
  component: InvitationEventMiddle,
};

const Template = (args) => ({
  components: {InvitationEventMiddle},
  props: Object.keys(args),
  template: `
<InvitationEventMiddle v-bind="$props"><InvitationEventMiddle />`,
});

export const InvitationEventMiddleStory = Template.bind();