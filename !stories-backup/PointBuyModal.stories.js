import PointBuyModalView from '@/views/components/coaching/PointBuyModalView';
import billingProducts from './mock/billing-products.json';

export default {
  title: "coaching/PointBuyModal",
  component: PointBuyModalView,
};

const PAYMENT_METHOD_CREDIT = 'payment-method-credit';
const PAYMENT_METHOD_CULTURE_GIFT_CARD = 'payment-method-culture-gift-card';
const PAYMENT_METHOD_GAME_GIFT_CARD = 'payment-method-game-gift-card';
const PAYMENT_METHOD_BOOK_GIFT_CARD = 'payment-method-book-gift-card';
const PAYMENT_METHOD_TRANSFER = 'payment-method-transfer';

const paymentMethods = [
  {key: PAYMENT_METHOD_CREDIT, text: '신용카드 결제', icon: 'icon-credit.svg'},
  {key: PAYMENT_METHOD_CULTURE_GIFT_CARD, text: '문화상품권(컬쳐랜드)', icon: 'icon-gift-card.svg'},
  {key: PAYMENT_METHOD_GAME_GIFT_CARD, text: '게임문화상품권(스마트문상)', icon: 'icon-gift-card.svg'},
  {key: PAYMENT_METHOD_BOOK_GIFT_CARD, text: '도서문화상품권(북앤라이프)', icon: 'icon-gift-card.svg'},
  {key: PAYMENT_METHOD_TRANSFER, text: '실시간 계좌이체', icon: 'icon-financial-account.svg'},
];



const Template = (args) => ({
  components: {PointBuyModalView},
  props: Object.keys(args),
  template: `<PointBuyModalView v-bind="$props" />`,
});

export const PointBuyModal = Template.bind({});
PointBuyModal.args = {paymentMethods, billingProducts, upPoint: 2550}