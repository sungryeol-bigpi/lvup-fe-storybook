import lolChamps from "./lolChamps.json";

const coachingService = {
  getLolChampsAll: async () => lolChamps,
  getChampByCode: async (champCode) => lolChamps.find(c => c.code === champCode)
}

export default (Vue, options) => {
  console.log('service mocked')
  Vue.prototype.$services = {
    coaching: coachingService
  }
};
