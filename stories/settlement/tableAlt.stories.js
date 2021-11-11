import TableAlt from '@/views/components/coaching/settlement/TableAlt.vue';
import TableColumn from '@/views/components/coaching/settlement/TableColumn.vue';

export default {
  title: "coaching/settlement/TableAlt",
  component: TableAlt,
};

const Template = (args, {argTypes}) => ({
  components: {TableAlt, TableColumn},
  props: Object.keys(argTypes),
  template: `
<div>
  <TableAlt v-bind="$props">
  <TableColumn key="a" field="payoutDatetime" title="입금일" />
  <TableColumn key="b" field="memo" title="주문 메모" />
</TableAlt>
</div>`
});

// {header: '주문 완료일', name: 'endDatetime'},
// {header: '주문 메모', name: 'memo'}, // 실제 데이터에 없음
// {header: '전환 상태', name: 'status'},
// {header: '주문 포인트', name: 'payoutAmount'},
// {header: '상품명', name: 'productName'}, // 실제 데이터에 없음
// {header: '고객 닉네임', name: 'userNickname'}, // 실제 데이터에 없음
// {header: '주문 번호', name: 'settlementNumber'},
// {header: '상세 정보'}
export const CaseA = Template.bind({});
CaseA.args = {
  value: [
    {
      settlementId: '6189e47ec0eef210586c3f16', // 정산 아이디
      payoutDatetime: 1623131807990, // 입금일(nullable)
      status: 'COMPLETED', // (입금 완료), // 입금 상태
      payoutAmount: 230000, //입금 금액
      settlementNumber: '20211001N1A1', //정산 번호
      startDatetime: 1623131807990, // 주문 확정 시작(정산 집계 시작일)
      endDatetime: 1623131807990, // 주문 확정 종료(정산 집계 종료일)
      bank: '카카오뱅크', // 은행명
    },
    {
      settlementId: '6189e55fae7a0ec0a53bd8df', // 정산 아이디
      payoutDatetime: 1623131807990, // 입금일
      status: 'WAITING', // (입금 예정), // 입금 상태
      payoutAmount: 650000, //입금 금액
      settlementNumber: '20211101N1A1', //정산 번호
      startDatetime: 1623131807990, // 주문 확정 시작(정산 집계 시작일)
      endDatetime: 1623131807990, // 주문 확정 종료(정산 집계 종료일)
      bank: '카카오뱅크', // 은행명
    },
    {
      settlementId: '6189e558161ed0e6226e0ed4', // 정산 아이디
      payoutDatetime: 1623131807990, // 입금일
      status: 'CARRY_OVER', //(입금 이월), // 입금 상태
      payoutAmount: 15000, //입금 금액
      settlementNumber: '20211101N1A2', //정산 번호
      startDatetime: 1623131807990, // 주문 확정 시작(정산 집계 시작일)
      endDatetime: 1623131807990, // 주문 확정 종료(정산 집계 종료일)
      bank: '국민은행', // 은행명
    },
    {
      settlementId: '6189e4f8f323826b7f2ab5d3', // 정산 아이디
      payoutDatetime: 1623131807990, // 입금일
      status: 'EXCLUDED',  // (입금 제외), // 입금 상태
      payoutAmount: 0, //입금 금액
      settlementNumber: '20211101N1A3', // 정산 번호
      startDatetime: 1623131807990, // 주문 확정 시작(정산 집계 시작일)
      endDatetime: 1623131807990, // 주문 확정 종료(정산 집계 종료일)
      bank: '신한은행', // 은행명
    },
  ]};