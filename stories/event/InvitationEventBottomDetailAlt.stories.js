import InvitationEventBottomDetailAlt from '@/views/components/coaching/event/InvitationEventBottomDetailAlt'

export default {
  title: "coaching/event/InvitationEventBottomDetailAlt",
  component: InvitationEventBottomDetailAlt,
};

const Template = (args) => ({
  components: {InvitationEventBottomDetailAlt},
  props: Object.keys(args),
  template: `<InvitationEventBottomDetailAlt v-bind="$props"><InvitationEventBottomDetailAlt />`,
});

export const InvitationEventBottomDetailAltStory = Template.bind();