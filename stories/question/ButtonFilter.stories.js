import ButtonFilter from "@/views/components/coaching/question/ButtonFilter.vue";
import { setViewport } from "../util/parameters";

export default {
  title: "coaching/question/ButtonFilter",
  component: ButtonFilter,
  parameters: {
    backgrounds: { default: "coach-grey" },
    ...setViewport('desktopLarge'),
  },
};

const Template = (args, { argTypes }) => ({
  components: { ButtonFilter },
  props: Object.keys(argTypes).filter((k) => k !== "content"),
  template: `<ButtonFilter v-bind="$props" :class="{active}">${args.content}</ButtonFilter>`,
});

export const Normal = Template.bind({})
Normal.args = {
  content: `전체`,
  active: false,
}

export const NormalActive = Template.bind({})
NormalActive.args = {
  content: `전체`,
  active: true,
}

export const WithExtraActive = Template.bind({})
WithExtraActive.args = {
  content: `<span>포지션 : </span><em>탑</em>`,
  active: true,
}

export const Mobile = Template.bind({})
Mobile.args = {
  content: `전체`,
  active: false,
}

Mobile.parameters = {
  ...setViewport('mobileMedium')
}