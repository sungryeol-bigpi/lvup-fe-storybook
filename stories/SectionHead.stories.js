import SectionHead from "@/views/components/coaching/SectionHead.vue";

export default {
  title: "coaching/SectionHead",
  component: SectionHead,
  parameters: {
    backgrounds: { default: "coach-grey" },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SectionHead },
  props: Object.keys(argTypes),
  template: `<SectionHead v-bind="$props">
  ${args.slotTemplate}
  </SectionHead>`,
});

export const Sample = Template.bind({})
Sample.args = {
  title: "sample",
  extra: "샘플",
  slotTemplate: `<div style="background-color:black;height:40px;border-radius:12px;color:white;">------</div>`
};

export const CoachTv = Template.bind({});
CoachTv.args = {
  title: "COACH TV",
  extra: "코치TV",
  slotTemplate: `<div style="background-color:black;height:40px;border-radius:12px;color:white;padding-left:8px;padding-right:8px;display:flex;align-items:center;">전체보기</div>`
};

export const Ranking = Template.bind({})
Ranking.args = {
  title: 'RANKING',
  extra: '최근 답변이 활발한 코치',
  slotTemplate: `<div style="width:40px;height:40px;background-color:gray;">[</div><div style="width:40px;height:40px;background-color:gray;">]</div>`
}