import lolChamps from "@mocks/lol-champs.json";
import lolLane from '@mocks/lol-lanes.json';
import lolTier from '@mocks/lol-tiers.json';

const coachingService = {
  getLolChamps: async ({name = '', lane = ''}) => lolChamps.filter(c => c.koName.includes(name) || c.lane.includes(lane)),
  getLolChampsAll: async () => lolChamps,
  getChampByCode: async (champCode) => lolChamps.find(c => c.code === champCode),
  getCategories: async(groupName) => {
    return {LOL_LANE: lolLane, LOL_TIER: lolTier}[groupName]
  },
  getPreferChamp: async() => [],
}

export default (Vue, options) => {
  console.log('service mocked')
  Vue.prototype.$services = {
    coaching: coachingService
  }
};
