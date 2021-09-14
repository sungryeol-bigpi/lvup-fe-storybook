import FilledBadge from '@/views/components/coaching/FilledBadge.vue'

export default {
  title: "coaching/FilledBadge",
  component: FilledBadge,
};

const Template = (args) => ({
  components: {FilledBadge},
  props: Object.keys(args),
  template: `<FilledBadge v-bind="$props"><span>Text</span></FilledBadge>`,
});

export const FilledBadgeGray = Template.bind({});
FilledBadgeGray.args = {color: 'gray'};

export const FilledBadgeBlack = Template.bind({});
FilledBadgeBlack.args = {color: 'black'};

export const FilledBadgeWhite = Template.bind({});
FilledBadgeWhite.args = {color: 'white'};

export const FilledBadgeRed = Template.bind({});
FilledBadgeRed.args = {color: 'red'};

export const FilledBadgePurple = Template.bind({});
FilledBadgePurple.args = {color: 'purple'};

export const FilledBadgeYellow = Template.bind({});
FilledBadgeYellow.args = {color: 'yellow'};

export const FilledBadgeDarkMagenta = Template.bind({});
FilledBadgeDarkMagenta.args = {color: 'dark-magenta'};