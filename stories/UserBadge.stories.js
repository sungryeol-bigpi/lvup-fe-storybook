import UserBadge from "@/views/components/coaching/UserBadge.vue";
import { setViewport } from "./util/parameters";
import { users } from './sample'
const [sampleUser] = users;

export default {
  title: "coaching/UserBadge",
  component: UserBadge,
  parameters: {
    backgrounds: { default: "coach-grey" },
  },
};

const Template = (args, { argTypes }) => ({
  components: { UserBadge },
  props: Object.keys(argTypes),
  template: `<UserBadge v-bind="$props" />`,
});

export const DesktopSmall = Template.bind({});
DesktopSmall.args = { myInfo: sampleUser };
DesktopSmall.parameters = { ...setViewport("desktopSmall") };

export const TabletPortrait = Template.bind({});
TabletPortrait.args = { myInfo: sampleUser };
TabletPortrait.parameters = { ...setViewport("tabletPortrait") };

export const MobileMedium = Template.bind({});
MobileMedium.args = { myInfo: sampleUser };
MobileMedium.parameters = { ...setViewport("mobileMedium") };
