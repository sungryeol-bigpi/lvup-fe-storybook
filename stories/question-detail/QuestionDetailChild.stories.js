import ButtonLesson from "@/views/components/coaching/question-detail/ButtonLesson";
import ButtonIconGhost from "@/views/components/coaching/question-detail/ButtonIconGhost"
import ButtonList from '@/views/components/coaching/question-detail/ButtonList'
import NoContent from '@/views/components/coaching/question-detail/NoContent'
import { setViewport } from "@utils/parameters";

export default {
  title: "coaching/question-detail/QuestionDetailChild",
  parameters: {
    backgrounds: { default: "coach-grey" },
  },
};

const Template = (args, { argTypes }) => ({
  components: { ButtonLesson, ButtonIconGhost, ButtonList },
  props: Object.keys(argTypes),
  template: `	
<div>
  <h1>ButtonLesson</h1>
	<button-lesson />
	<button-lesson disabled />
  <hr />
	<h1>ButtonIconGhost</h1>
	<button-icon-ghost type="thumbsup" />
	<button-icon-ghost type="share" />
	<button-icon-ghost type="bookmark" />
	<button-icon-ghost type="thumbsup" active/>
	<button-icon-ghost type="share" active/>
	<button-icon-ghost type="bookmark" active/>
  <hr />
  <h1>ButtonList</h1>
  <button-list />
</div>
	`,
});

export const DesktopLarge = Template.bind({});
DesktopLarge.parameters = { ...setViewport("desktopLarge") };

export const MobileLarge = Template.bind({});
MobileLarge.parameters = { ...setViewport("mobileLarge") };

const NoContentTemplate = (arg, {argTypes}) => ({
  props: Object.keys(argTypes),
  components: {NoContent},
  template: `<NoContent :src="src" :alt="alt">${arg.message}</NoContent>`
})

export const NoContentA = NoContentTemplate.bind({})
NoContentA.args = {message: '코치님의 답변을 기다리고 있습니다.', alt: 'eyes', src: '/img/coaching/seeking-eyes.svg'}

export const NoContentB = NoContentTemplate.bind({})
NoContentB.args = {message: '아직 질문을 작성하지 않으신 것 같아요.<br />코치들에게 질문을 작성해보세요!', alt: 'memopad', src: '/img/coaching/memopad.svg' }
