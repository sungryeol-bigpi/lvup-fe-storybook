import CoachInfoBanner from '@/views/components/coaching/CoachInfoBanner.vue';
import SvgArrow from '@/views/graphics/svg-arrow.vue';

export default {
  title: 'coaching/CoachInfoBanner',
  component: CoachInfoBanner,
};

const Template = (args, { argTypes }) => ({
  components: { CoachInfoBanner, SvgArrow },
  data: () => ({}),
  props: Object.keys(argTypes),
  template: `<CoachInfoBanner>
              <p>매월 1일부터 말일까지 발생한 주문 확정 금액은 다음달 20일 내 영업일에 등록한 계좌로 입금됩니다.</p>
              <p>현금으로 정산 받으시면, 매년 5월 종합소득세 신고 의무가 발생합니다.</p>
              <a href="/">판매내역 도움말 보기<SvgArrow></a>
             </CoachInfoBanner>`,
});

export const story = Template.bind({});