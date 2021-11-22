import TutorMyCard from "@/views/components/coaching/user/TutorMyCard.vue";
import { setViewport } from "@utils/parameters";
import { coachInfo } from "@samples";

export default {
  title: "coaching/user/TutorMyCard",
  component: TutorMyCard,
  parameters: {
    backgrounds: { default: "coach-grey" },
  },
};

const Template = (args, { argTypes }) => ({
  components: { TutorMyCard },
  props: Object.keys(argTypes),
  template: `<TutorMyCard v-bind="$props" />`,
});

export const Empty = Template.bind({});
Empty.args = {};

export const CaseADesktop = Template.bind({});
CaseADesktop.args = { coachInfo };
CaseADesktop.parameters = { ...setViewport("desktopLarge") };

export const CaseATabletPortrait = Template.bind({});
CaseATabletPortrait.args = { coachInfo };
CaseATabletPortrait.parameters = { ...setViewport("tabletPortrait") };

export const CaseAMobileMedium = Template.bind({});
CaseAMobileMedium.args = { coachInfo };
CaseAMobileMedium.parameters = { ...setViewport("mobileMedium") };
