import { toolsKit } from "./kits/tools";
import { frontendKit } from "./kits/frontend";
import { backendKit } from "./kits/backend";
import { databaseKit } from "./kits/database";
import { productivityKit } from "./kits/productvity";
import { uiuxKit } from "./kits/uiux";

export const kits = [
  ...toolsKit,
  ...frontendKit,
  ...backendKit,
  ...databaseKit,
  ...productivityKit,
  ...uiuxKit,
];

export function getSections() {
  const categories = Array.from(new Set(kits.flatMap((kit) => kit.tags)));

  
  return categories
    .map((tag) => ({
      tag,
      kits: kits.filter((kit) => kit?.tags?.includes(tag)),
    }))
    .sort((a, b) => b.kits.length - a.kits.length);
}