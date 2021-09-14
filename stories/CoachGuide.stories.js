import CoachGuide from "@/views/components/coaching/CoachGuide.vue";
import { setFullscreen, setViewport } from "./util/parameters";

export default {
  title: "coaching/user/CoachGuide",
  component: CoachGuide,
  parameters: {
    ...setFullscreen,
  },
};

const Template = (args, { argTypes }) => ({
  components: { CoachGuide },
  props: Object.keys(argTypes),
  template: `<CoachGuide v-bind="$props" />`,
});

export const Default = Template.bind({});

export const DesktopLarge = Template.bind({});
DesktopLarge.parameters = {
  ...setViewport("desktopLarge")
};

export const TabletPortrait = Template.bind({})
TabletPortrait.parameters = {
  ...setViewport('tabletPortrait')
}

export const MobileMedium = Template.bind({})
MobileMedium.parameters = {
  ...setViewport('mobileMedium')
}