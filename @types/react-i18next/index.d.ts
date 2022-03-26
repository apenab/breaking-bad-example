import "react-i18next";
import { resources } from "../../src/i18n/config";

declare module "react-i18next" {
  // @ts-ignore
  type DefaultResources = typeof resources["en"];
  interface Resources extends DefaultResources {}
}
