import AccordionList from '@/views/components/coaching/sales/AccordionList.vue';
import AccordionListItem from '@/views/components/coaching/sales/AccordionListItem.vue';
import StatusBadgeSettlement from '@/views/components/coaching/sales/StatusBadgeSettlement.vue';


export default {
  title: 'coaching/sales/AccordionList',
  component: AccordionList,
};

const Template = (args, { argTypes }) => ({
  components: { AccordionList, AccordionListItem, StatusBadgeSettlement },
  props: Object.keys(argTypes),
  template: `
<div>
  <AccordionList>
    <template #title>
      <h1>판매 상세</h1>
    </template>
    <template #list>
      <AccordionListItem>
        <p>주문 번호</p>
        <p>20210830N1A2</p>
      </AccordionListItem>
      <AccordionListItem>
        <p>입금 상태</p>
        <StatusBadgeSettlement value="COMPLETED"/>
      </AccordionListItem>
      <AccordionListItem>
        <p>주문 완료일</p>
        <p>2021-07-31 08: 05 AM</p>
      </AccordionListItem>    
      <AccordionListItem>
        <p>주문 포인트</p>
        <p><string>5,000 UP</string></p>
      </AccordionListItem>
    </template>
  </AccordionList>
  <AccordionList useAccordion>
    <template #title>
      <h2>고객 정보</h2>
    </template>
    <template #list>
      <AccordionListItem>
        <p><em>(A) 주문 금액<em></p>
        <p><strong>200,000원</strong></p>
      </AccordionListItem>
      <ul>
        <li>
          <AccordionListItem>
            <p>(A1) 주문 금액</p>
            <p>구매 확정</p>
          </AccordionListItem>
        </li>
        <li>
          <AccordionListItem>
            <p>(A2) 상담 주문</p>
            <p>상담 주문</p>
          </AccordionListItem>
        </li>
      </ul>
      <AccordionListItem>
        <p>주문 상태</p>
        <p>구매 확정</p>
      </AccordionListItem>
      <AccordionListItem>
        <p>주문 완료일</p>
        <p>2021-07-31 08: 05 AM</p>
      </AccordionListItem>    
      <AccordionListItem>
        <p>주문 포인트</p>
        <p><em>5,000 UP</em></p>
      </AccordionListItem>
    </template>
  </AccordionList>
  <AccordionList useAccordion>
    <template #title>
      <h2>고객 정보</h2>
    </template>
    <template #list>
      <AccordionListItem>
        <p><em>(A) 주문 금액<em></p>
        <p><strong>200,000원</strong></p>
      </AccordionListItem>
      <ul>
        <li>
          <AccordionListItem>
            <p>(A1) 주문 금액</p>
            <p>구매 확정</p>
          </AccordionListItem>
        </li>
        <li>
          <AccordionListItem>
            <p>(A2) 상담 주문</p>
            <p>상담 주문</p>
          </AccordionListItem>
        </li>
      </ul>
      <AccordionListItem>
        <p>주문 상태</p>
        <p>구매 확정</p>
      </AccordionListItem>
      <AccordionListItem>
        <p>주문 완료일</p>
        <p>2021-07-31 08: 05 AM</p>
      </AccordionListItem>    
      <AccordionListItem>
        <p>주문 포인트</p>
        <p><em>5,000 UP</em></p>
      </AccordionListItem>
    </template>
  </AccordionList>
</div>
`
});

export const Base = Template.bind({});