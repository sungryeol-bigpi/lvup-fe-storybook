import UserBadge from "@/views/components/coaching/UserBadge.vue";
import { setViewport } from "./util/parameters";

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
DesktopSmall.args = {
  avatar:
    "dev/images/user/5c048d7efb1a87695c765cba_1607056860036_1607056860085.jpg",
  userId: "railguns",
  nickName: "railguns",
  upPoint: 30000,
};
DesktopSmall.parameters = {
  ...setViewport("desktopSmall"),
};

export const TabletPortrait = Template.bind({});
TabletPortrait.args = {
  avatar:
    "dev/images/user/5c048d7efb1a87695c765cba_1607056860036_1607056860085.jpg",
  userId: "railguns",
  nickName: "railguns",
  upPoint: 30000,
};
TabletPortrait.parameters = { ...setViewport("tabletPortrait") };

export const MobileMedium = Template.bind({});
MobileMedium.args = {
  avatar:
    "dev/images/user/5c048d7efb1a87695c765cba_1607056860036_1607056860085.jpg",
  userId: "railguns",
  nickName: "railguns",
  upPoint: 30000,
};
MobileMedium.parameters = { ...setViewport("mobileMedium") };
