import InputSuggest from "@/views/components/coaching/InputSuggest.vue";

export default {
  title: "coaching/InputSuggest",
  component: InputSuggest,
};

// const Template = (args, { argTypes }) => ({
//   components: { InputSuggest },
//   props: Object.keys(argTypes),
//   data: () => ({ value: "" }),
//   methods: {
//     async suggest(keyword = "") {
//       return ["sample1", "sample2", "sample3"].filter(keyword);
//     },
//   },
//   template: `<InputSuggest v-bind="$props" :suggest="suggest" v-model="value" />`,
// });

export const TextOnly = (args, { argTypes }) => ({
  components: { InputSuggest },
  props: Object.keys(argTypes),
  data: () => ({ text: "" }),
  methods: {
    async suggest(keyword = "") {
      return ["sample1", "sample2", "sample3"].filter(t => t.includes(keyword));
    },
  },
  template: `<InputSuggest v-bind="$props" :suggest="suggest" v-model="text" />`,
});

export const TextOnlyKor = (args, { argTypes }) => ({
  components: { InputSuggest },
  props: Object.keys(argTypes),
  data: () => ({ text: "" }),
  methods: {
    async suggest(keyword = "") {
      return ["샘플1", "샘플2", "샘플3"].filter(t => t.includes(keyword));
    },
  },
  template: `<InputSuggest v-bind="$props" :suggest="suggest" v-model="text" />`,
});
