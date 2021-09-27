import lolChamps from "./lolChamps.json";

const coachingService = {
  getLolChamps: async ({name = '', lane = ''}) => lolChamps.filter(c => c.koName.includes(name) || c.lane.includes(lane)),
  getLolChampsAll: async () => lolChamps,
  getChampByCode: async (champCode) => lolChamps.find(c => c.code === champCode),
}

export default (Vue, options) => {
  console.log('service mocked')
  Vue.prototype.$services = {
    coaching: coachingService
  }
};
