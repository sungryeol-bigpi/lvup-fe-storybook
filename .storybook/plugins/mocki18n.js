export default (Vue, options) => {
  console.log('i18n mocked')
  Vue.prototype.$t = (...args) => `$t-${args.join(",")}`;
  Vue.prototype.$date = Vue.prototype.$t;
  Vue.prototype.$te = () => true;
  Vue.prototype.$i18n = (key) => {
    const i18nData = { lang: "ko", country: "kr" };
    return i18nData[key] || "";
  };
  Vue.prototype.$fromNow = (value) => `$fromNow(${value})`;
};
