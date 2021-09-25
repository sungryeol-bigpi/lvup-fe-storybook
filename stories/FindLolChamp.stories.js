import FindLolChamp from '@/views/components/coaching/FindLolChamp.vue'
import preferChamps from './mock/prefer-champions.json';
import lolChamps from './mock/lol-champs.json';


export default {
  title: "coaching/FindLolChamp",
  component: FindLolChamp,
};

const Template = (args) => ({
  components: {FindLolChamp},
  props: Object.keys(args),
  template: `<FindLolChamp v-model="$props.preferChamps" v-bind="$props"></FindLolChamp>`,
});

export const nonRegisteredLol = Template.bind({});
nonRegisteredLol.parameters = {backgrounds: {default: 'coach-deep-dark'}}
nonRegisteredLol.args = {preferChamps};

export const registeredLol = Template.bind({});
registeredLol.parameters = {backgrounds: {default: 'coach-deep-dark'}}
registeredLol.args = {preferChamps, champs: lolChamps, isLogin: true, isRegisteredLol: true};