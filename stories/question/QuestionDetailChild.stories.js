import ButtonLesson from "@/views/components/coaching/question-detail/ButtonLesson";
import ButtonIconGhost from "@/views/components/coaching/question-detail/ButtonIconGhost"
import { setViewport } from "@utils/parameters";

export default {
  title: "coaching/question-detail/QuestionDetailChild",
  // component: QuestionDetail,
  parameters: {
    backgrounds: { default: "coach-grey" },
  },
};

const Template = (args, { argTypes }) => ({
  components: { ButtonLesson, ButtonIconGhost },
  props: Object.keys(argTypes),
  template: `	
<div>
  <h1>ButtonLesson</h1>
	<button-lesson />
	<button-lesson disabled />
	<h1>ButtonIconGhost</h1>
	<button-icon-ghost type="thumbsup" />
	<button-icon-ghost type="share" />
	<button-icon-ghost type="bookmark" />
	<button-icon-ghost type="thumbsup" active/>
	<button-icon-ghost type="share" active/>
	<button-icon-ghost type="bookmark" active/>
</div>
	`,
});

export const DesktopLarge = Template.bind({});
DesktopLarge.parameters = { ...setViewport("desktopLarge") };

export const MobileLarge = Template.bind({});
MobileLarge.parameters = { ...setViewport("mobileLarge") };
