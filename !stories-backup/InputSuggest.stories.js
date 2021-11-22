import InputSuggest from "@/views/components/coaching/InputSuggest.vue";
import lolChamps from "@mocks/lol-champs.json";
import ChampSelectItem from "@/views/components/coaching/post-question/ChampSelectItem.vue";

export default {
  title: "coaching/InputSuggest",
  component: InputSuggest,
};

export const Champs = (args, { argTypes }) => ({
  components: { InputSuggest },
  props: Object.keys(argTypes),
  data: () => ({ champCode: "", champText: "" }),
  methods: {
    async onSuggest(keyword = "") {
      const re = new RegExp(keyword, "i");
      return lolChamps.filter((c) => re.test(c.code) || re.test(c.koName));
    },
    onSelectChamp({ value, setValue, setText }) {
      console.log("onSelectChamp", value);
      setValue(value?.code);
      setText(value?.koName);
    },
    getChampItemProp(champ) {
      return { ...champ, key: champ.code }
    },
  },
  computed: {
    ChampSelectItem: () => ChampSelectItem,
  },
  template: `<InputSuggest v-bind="$props" :suggest="onSuggest" v-model="champCode" :item-tag="ChampSelectItem" :text.sync="champText" :on-select="onSelectChamp" :get-item-prop="getChampItemProp" />`,
});

export const RandomSample = (args, { argTypes }) => ({
  components: { InputSuggest },
  props: Object.keys(argTypes),
  data: () => ({ key: "", display: "" }),
  methods: {
    async onSuggest(keyword = "") {
      return ["sample1", "sample2", "sample3"].filter((k) =>
        k.includes(keyword)
      );
    },
  },
  template: `<InputSuggest v-bind="$props" :suggest="onSuggest" v-model="key" :text.sync="display" />`,
});
