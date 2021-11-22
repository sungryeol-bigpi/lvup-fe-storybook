import InvitationEventMiddleAlt from '@/views/components/coaching/event/InvitationEventMiddleAlt.vue'

export default {
  title: "coaching/event/InvitationEventMiddleAlt",
  component: InvitationEventMiddleAlt,
};

const Template = (args) => ({
  components: {InvitationEventMiddleAlt},
  props: Object.keys(args),
  template: `
<InvitationEventMiddleAlt v-bind="$props"><InvitationEventMiddleAlt />`,
});

export const InvitationEventMiddleAltStory = Template.bind();