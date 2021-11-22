import DocumentRejectModal from "@/views/components/account/DocumentRejectModal.vue";

export default {
  title: "DocumentRejectModal",
  component: DocumentRejectModal,
};

const Template = (args, { argTypes }) => ({
  components: { DocumentRejectModal },
  props: Object.keys(argTypes),
  template: `<DocumentRejectModal v-bind="$props" />`,
});

export const FirstStory = Template.bind({});

