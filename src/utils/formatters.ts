import { FileData } from "../types";

export const formatSelectedItemsForAlert = (items: FileData[]): string => {
  return items
    .map(
      (item) => `Name: ${item.name} Device: ${item.device} Path: ${item.path}`
    )
    .join("\n");
};
