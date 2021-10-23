import { setViewport } from '../util/parameters';
import ModalCoupon from './ModalCouponWrap.vue'

export default {
  title: "coaching/modal-coupon/ModalCoupon",
  component: ModalCoupon,
};

const Template = (args) => ({
  components: { ModalCoupon },
  props: Object.keys(args),
  template: `<ModalCoupon v-bind="$props" />`,
});

export const DesktopLarge = Template.bind({});
DesktopLarge.parameters = {...setViewport('desktopLarge')}
export const MobileMedium = Template.bind({});
MobileMedium.parameters = {...setViewport('mobileMedium')}
export const CaseB = Template.bind({})
CaseB.args = {lessonProductId: 'b', originalPrice: 8000}
export const NoCoupon = Template.bind({})
NoCoupon.args = ({lessonProductId: 'no-coupon', originalPrice: 300})