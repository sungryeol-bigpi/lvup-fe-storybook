import TutorDashboard from "@/views/components/coaching/user/TutorDashboard.vue";
import { setViewport } from "../util/parameters";

export default {
  title: "coaching/user/TutorDashboard",
  component: TutorDashboard,
  parameters: {
    backgrounds: { default: "coach-grey" },
  },
};

const Template = (args, { argTypes }) => ({
  components: { TutorDashboard },
  props: Object.keys(argTypes),
  template: `<TutorDashboard v-bind="$props" />`,
});

const sampleUser = {
  "id": "5db2c464cfc74a983c8ae993",
  "uid": "LV_yabap60ie9",
  "nickname": "test1_user",
  "email": "test1_user@test.test",
  "stats": {
    "point": 5,
    "prizesCount": 2,
    "recordsCount": 4,
    "tournamentsCount": 12,
    "updatedAt": 1578421803485
  },
  "createdAt": 1543245074991,
  "isTermAgree": true,
  "state": "NORMAL",
  "verification": {
    "isVerified": true,
    "birthDay": 24,
    "birthMonth": 6,
    "birthYear": 2006
  },
  "emailVerification": {
    "createdDateTime": 1614336156093,
    "isVerified": true
  },
  "documentVerification": null,
  "information": {
    "image": "dev/images/user/5db2c469cfc74a983c8aebba_1616569950138_1616569950593.jpg",
    "backgroundImageUrl": null
  },
  "providerType": "LVUP",
  "loginProvider": {
    "providerType": "LVUP",
    "iconUrl": "prod/images/tournament/Icon_Platform_Lvup.svg"
  },
  "providers": {
    "battlenet": {
      "platformId": "TJSSMA#3469",
      "updatedAt": 1584091725632,
      "gameStats": null,
      "progress": "COMPLETE"
    },
    "discord": {
      "platformId": "박첩구드#3063",
      "updatedAt": 1608714085987,
      "gameStats": null,
      "progress": "COMPLETE"
    },
    "steam": null,
    "lol_highest_tier": null,
    "ubisoft": null,
    "lol": {
      "platformId": "애 쉬",
      "updatedAt": 1617105612960,
      "gameStats": {
        "tier": "PLATINUM",
        "rank": "IV",
        "rankNum": 4,
        "iconImageUrl": "prod/images/thirdparty/riot/lol/Emblem_Platinum.png"
      },
      "progress": "COMPLETE"
    },
    "wr": null,
    "origin": null,
    "pubg_kakao": {
      "platformId": "1020blue",
      "updatedAt": 1588068290767,
      "gameStats": null,
      "progress": "COMPLETE"
    },
    "pubg_steam": {
      "platformId": "5inn_-",
      "updatedAt": 1588067918358,
      "gameStats": {
        "tier": "PLATINUM",
        "rank": "III",
        "rankNum": 3,
        "iconImageUrl": "prod/images/thirdparty/pubg/Pubg_Emblem_Platinum3.png"
      },
      "progress": "COMPLETE"
    },
    "sa": {
      "platformId": "aaaa",
      "updatedAt": 1603172229408,
      "gameStats": null,
      "progress": "COMPLETE"
    },
    "valorant": {
      "platformId": "dfgdfgfdggfd",
      "updatedAt": 1600151754776,
      "gameStats": null,
      "progress": "COMPLETE"
    },
    "pubg_mobile": null,
    "pubg_esports": null,
    "sa_barracks": {
      "platformId": "sabi",
      "updatedAt": 1603270801152,
      "gameStats": null,
      "progress": "COMPLETE"
    },
    "df": null,
    "cyphers": {
      "platformId": "dsfd",
      "updatedAt": 1600152157311,
      "gameStats": null,
      "progress": "COMPLETE"
    },
    "individual_event_coupon": null,
    "team_event_coupon": null,
    "kart_rider_rush_plus_name": null,
    "kart_rider_rush_plus_uid": null,
    "kart_rider": null,
    "random_to_you": null,
    "university_email": null
  },
  "gameStatsMap": {
    "lol": {
      "tier": "PLATINUM",
      "rank": "IV",
      "rankNum": 4,
      "iconImageUrl": "prod/images/thirdparty/riot/lol/Emblem_Platinum.png"
    },
    "pubg": {
      "tier": "PLATINUM",
      "rank": "III",
      "rankNum": 3,
      "iconImageUrl": "prod/images/thirdparty/pubg/Pubg_Emblem_Platinum3.png"
    }
  },
  "isOrganizer": false,
  "isCoach": true,
  "mustRetryVerification": false,
  "lastGameId": "LOL",
  "wallet": {
    "balanceAmount": 255000,
    "upBalanceAmount": 265360,
    "velBalanceAmount": 255000
  },
  "hasChannel": true
}
export const Empty = Template.bind({});
Empty.args = {};

export const CaseADesktop = Template.bind({});
CaseADesktop.args = {userInfo: sampleUser};
CaseADesktop.parameters = { ...setViewport('desktopLarge')};

export const CaseATabletPortrait = Template.bind({});
CaseATabletPortrait.args = { userInfo: sampleUser};
CaseATabletPortrait.parameters = {...setViewport('tabletPortrait')};

export const CaseAMobileMedium = Template.bind({});
CaseAMobileMedium.args = { userInfo: sampleUser};
CaseAMobileMedium.parameters = {...setViewport('mobileMedium')};