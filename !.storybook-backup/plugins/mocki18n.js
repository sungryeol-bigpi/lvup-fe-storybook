import i18nData from "@/plugins/i18n/data";
import _get from "lodash/get";
import BI18n from "@/modules/BI18n";
import moment from "moment";
import "@/plugins/i18n/moment.ko";

const defaultLocale = "kr";

export default (Vue, options) => {
  console.log("i18n mocked");
  const $te = (key = "") => _get(i18nData, key) || false;
  const i18n = new BI18n({ data: { ko: i18nData } });
  Vue.prototype.$t = (key, opt) => i18n.translate(key, defaultLocale, false, false, opt);
  Vue.prototype.$date = (time, key = "ymd") => {
    return moment(+time).format(
      i18n.translate(`date.${key}`, defaultLocale, false, false)
    );
  };
  Vue.prototype.$fromNow = (time) => {
    moment.locale(defaultLocale);
    return moment(+time).fromNow();
  };

  Vue.prototype.$te = $te;
  Vue.prototype.$tc = (key, opt) => i18n.translate(key, defaultLocale, true, true, opt);
  const tv = (key, opt) => i18n.translate(key, defaultLocale, false, false, opt);
  Vue.directive('tv', tv)
  Vue.prototype.$i18n = (key) => {
    const i18nData = { lang: "ko", country: "kr" };
    return i18nData[key] || "";
  };
};
