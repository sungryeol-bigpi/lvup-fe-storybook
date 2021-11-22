import InputAnswer from "@/views/components/coaching/question-detail/InputAnswer.vue";
import { setViewport } from "@utils/parameters";

export default {
  title: "coaching/question-detail/InputAnswer",
  component: InputAnswer,
  parameters: {
    backgrounds: { default: "coach-grey" },
  },
};

const Template = (args, { argTypes }) => ({
  components: { InputAnswer },
	props: Object.keys(args).filter(f => f !== 'text'),
  data: () => ({ text: args.text }),
  template: `<InputAnswer v-bind="$props" v-model="text" />`,
});

export const DesktopLarge = Template.bind({});
DesktopLarge.args = { text: "" };
DesktopLarge.parameters = { ...setViewport("desktopLarge") };

export const MobileMedium = Template.bind({});
MobileMedium.args = { text: "" };
MobileMedium.parameters = { ...setViewport("mobileMedium") };

export const LongText = Template.bind({});
LongText.args = {
  text: `
2000자를 다 채우게 되면 필드영역이 빨간 테두리가 생겨요  타이핑을 치면 카운트가 올라갑니다.
말파이트로 안정적으로 버스 타시는 방법에 대해 질문해 주셨는데, 아쉽게도 말파이트는 라인전을 수동적으로 풀어나갈 경우 장점보다는 단점이 많이 드러나는 챔피언입니다. 라인을 받아먹기도 힘들뿐더러 유지력이 많이 부족하기 때문이죠.
말파이트로 안정적으로 버스 타시는 방법에 대해 질문해 주셨는데, 아쉽게도 말파이트는 라인전을 수동적으로 풀어나갈 경우 장점보다는 단점이 많이 드러나는 챔피언입니다. 라인을 받아먹기도 힘들뿐더러 유지력이 많이 부족하기 때문이죠.
말파이트로 안정적으로 버스 타시는 방법에 대해 질문해 주셨는데, 아쉽게도 말파이트는 라인전을 수동적으로 풀어나갈 경우 장점보다는 단점이 많이 드러나는 챔피언입니다. 라인을 받아먹기도 힘들뿐더러 유지력이 많이 부족하기 때문이죠.
말파이트로 안정적으로 버스 타시는 방법에 대해 질문해 주셨는데, 아쉽게도 말파이트는 라인전을 수동적으로 풀어나갈 경우 장점보다는 단점이 많이 드러나는 챔피언입니다. 라인을 받아먹기도 힘들뿐더러 유지력이 많이 부족하기 때문이죠.
`,
};
LongText.parameters = { ...setViewport("mobileMedium") };

export const Disabled = Template.bind({});
Disabled.args = { text: "", disabled: true };
