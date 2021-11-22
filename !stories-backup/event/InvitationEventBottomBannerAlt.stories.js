import InvitationEventBottomBannerAlt from '@/views/components/coaching/event/InvitationEventBottomBannerAlt.vue'

export default {
  title: "coaching/event/InvitationEventBottomBannerAlt",
  component: InvitationEventBottomBannerAlt,
};

const Template = (args) => ({
  components: {InvitationEventBottomBannerAlt},
  props: Object.keys(args),
  template: `<InvitationEventBottomBannerAlt v-bind="$props"><InvitationEventBottomBannerAlt />`,
});

export const InvitationEventBottomBannerAltStory = Template.bind();