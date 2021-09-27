import CoachConfirmModal from '@/views/components/coaching/CoachConfirmModal';

export default {
  title: 'coaching/CoachConfirmModal',
  component: CoachConfirmModal,
}


const Template = (args) => ({
  components: {CoachConfirmModal},
  props: Object.keys(args),
  template: `<CoachConfirmModal v-bind="$props" />`,
})

export const Success = Template.bind({});
const options = {title: '구매 완료', content: '구매가 성공적으로 완료되었습니다.'}
Success.args = {options}