import { CreateAppConfigInput } from "./appConfig.input";

/**
 * 서버 재 구동 시 즉시 db삽입될 data
 */
export const appConfigInitialValue: typeof CreateAppConfigInput.prototype[] = [
   {
      name: "appSideMenuWidth",
      validate: ["percent", "px"],
      initialValue: "20%",
   },
   {
      name: "appHeaderHeight",
      validate: ["percent", "px"],
      initialValue: "20%",
   },
];
