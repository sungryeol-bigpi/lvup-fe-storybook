import InvitationEventBottomBanner from '@/views/components/coaching/event/InvitationEventBottomBanner.vue'

export default {
  title: "coaching/event/InvitationEventBottomBanner",
  component: InvitationEventBottomBanner,
};

const Template = (args) => ({
  components: {InvitationEventBottomBanner},
  props: Object.keys(args),
  template: `<InvitationEventBottomBanner v-bind="$props"><InvitationEventBottomBanner />`,
});

export const InvitationEventBottomBannerStory = Template.bind();