import InvitationEventBanner from '@/views/components/coaching/event/InvitationEventBanner.vue'

export default {
  title: "coaching/event/InvitationEventBanner",
  component: InvitationEventBanner,
};

const Template = (args) => ({
  components: {InvitationEventBanner},
  props: Object.keys(args),
  template: `<InvitationEventBanner v-bind="$props" />`,
});

export const invitationEventBannerStory = Template.bind();