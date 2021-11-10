import InvitationEventBannerAlt from '@/views/components/coaching/event/InvitationEventBannerAlt.vue'

export default {
  title: "coaching/event/InvitationEventBannerAlt",
  component: InvitationEventBannerAlt,
};

const Template = (args) => ({
  components: {InvitationEventBannerAlt},
  props: Object.keys(args),
  template: `<InvitationEventBannerAlt v-bind="$props" />`,
});

export const InvitationEventBannerAltStory = Template.bind();