import IconLolChamp from '@/views/components/coaching/IconLolChamp.vue'
import champ from '@mocks/lol-champ.json';


export default {
  title: "coaching/IconLolChamp",
  component: IconLolChamp,
  backgrounds: { default: "coach-grey" },
};

const Template = (args) => ({
  components: {IconLolChamp},
  props: Object.keys(args),
  template: `<IconLolChamp v-bind="$props"></IconLolChamp>`,
});

export const IconLolChampStory = Template.bind({});
IconLolChampStory.args = {champ};