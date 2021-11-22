import { store as browser } from "@/modules/Browser";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export default {
  state: {},
  modules: {
    browser,
  },
};
