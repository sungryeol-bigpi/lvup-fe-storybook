import SectionTitle from "@/views/components/coaching/SectionTitle.vue";
import SectionTitleExtra from "@/views/components/coaching/SectionTitleExtra.vue";

export default {
  title: "coaching/SectionTitle",
  component: SectionTitle,
  parameters: {
    backgrounds: { default: "coach-grey" },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SectionTitle },
  props: Object.keys(argTypes).filter((k) => k !== "title"),
  computed: {
    title() {
      return args.title;
    },
  },
  template: `<SectionTitle v-bind="$props">{{title}}</SectionTitle>`,
});

export const CaseA = Template.bind({});
CaseA.args = {
  title: "sample",
};

export const WithExtra = (args, { argTypes }) => ({
  components: { SectionTitle, SectionTitleExtra },
  props: Object.keys(argTypes).filter((k) => !["title", "extra"].includes(k)),
  computed: {
    title() {
      return args.title;
    },
    extra() {
      return args.extra;
    },
  },
  template: `
<div>
	<SectionTitle>{{title}}</SectionTitle>
	<SectionTitleExtra>{{extra}}</SectionTitleExtra>
</div>
	`,
});
WithExtra.args = {
  title: "sample",
  extra: "샘플",
};
