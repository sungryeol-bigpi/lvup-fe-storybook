import TutorDashboardItem from "@/views/components/coaching/user/TutorDashboardItem.vue";
import ColorButton from '@/views/components/common/ColorButton.vue';
import { SvgTutorDashboardCoach } from '@/views/graphics/tutor-dashboard/LazyLoadings';
import { setViewport } from "../util/parameters";

export default {
  title: "coaching/user/TutorDashboardItem",
  component: TutorDashboardItem,
  parameters: {
    backgrounds: { default: "coach-grey" },
  },
};

const Template = (args, { argTypes }) => ({
  components: { TutorDashboardItem, ColorButton, SvgTutorDashboardCoach },
  props: Object.keys(argTypes),
  template: `<TutorDashboardItem v-bind="$props">
		<template #icon>${args.icon}</template>
		<template #title>{{title}}</template>
		<template #tooltip>{{tooltip}}</template>
		<template #big>{{big}}</template>
		<template #small>{{small}}</template>
		<template #bottom>${args.bottom}</template>
	</TutorDashboardItem>`,
});

export const Empty = Template.bind({});
Empty.args = {};

export const CaseA = Template.bind({})
CaseA.args = {
	icon: `<SvgTutorDashboardCoach />`,
	title: '등급 현황',
	big: '뉴비 코치',
	small: 'NEXT 레벨업 코치',
	bottom: `<ColorButton type="light-gray" disabled>승급 안내</ColorButton>`,
	tooltip: '코치 등급은 각 조건에 따라 승급 또는 강등될 수 있습니다'
}