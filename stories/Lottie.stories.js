import Lottie from "@/views/components/general/Lottie.vue";

export default {
  title: "Lottie",
  component: Lottie,
};

const Template = (args, {argTypes}) => ({
  components: {Lottie},
  props: Object.keys(argTypes),
  template: `<Lottie v-bind="$props" />`,
});

export const LottieStory = Template.bind({});
LottieStory.args = { autoplay:true, yoyo: true, src: '/lottie/logo-anim.json' };