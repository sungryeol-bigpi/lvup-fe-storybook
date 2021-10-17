import { setViewport } from '../util/parameters';
import ModalTutor from './ModalTutorWrap.vue'

export default {
  title: "coaching/modal-tutor/ModalTutor",
  component: ModalTutor,
};

const Template = (args) => ({
  components: { ModalTutor },
  props: Object.keys(args),
  template: `<ModalTutor v-bind="$props" />`,
});

export const DesktopLarge = Template.bind({});
DesktopLarge.parameters = {...setViewport('desktopLarge')}
export const MobileMedium = Template.bind({});
MobileMedium.parameters = {...setViewport('mobileMedium')}