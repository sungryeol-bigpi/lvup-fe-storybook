import lolChamps from "@mocks/lol-champs.json";
import lolLane from '@mocks/lol-lanes.json';
import lolTier from '@mocks/lol-tiers.json';
import preferChampions from '@mocks/prefer-champions.json'
import coupons from '@mocks/coupons';

const coachingService = {
  getLolChamps: async ({name = '', lane = ''} = {}) => lolChamps.filter(c => c.koName.includes(name) || c.lane.includes(lane)),
  getLolChampsAll: async () => lolChamps,
  getChampByCode: async (champCode) => lolChamps.find(c => c.code === champCode),
  getCategories: async(groupName) => {
    return {LOL_LANE: lolLane, LOL_TIER: lolTier}[groupName]
  },
  getPreferChamp: async() => preferChampions,
  getLessonCoupons: async({ lessonProductId = '' } = {}) => {
    if (lessonProductId === 'no-coupon') return [];
    if (lessonProductId === '') return coupons.slice(0,2)
    return coupons.slice(2);
  }
}
export const services = { coaching:coachingService };

export default (Vue, options) => {
  console.log('service mocked')
  Vue.prototype.$services = services; 
};
