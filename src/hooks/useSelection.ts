import { useState, useCallback, useMemo } from "react";
import { FileData } from "../types";
import { STATUSES } from "../constants";

export function useSelection(data: FileData[]) {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleSelectItem = useCallback((item: FileData, checked: boolean) => {
    if (checked) {
      setSelectedItems((prev) => [...prev, item.name]);
    } else {
      setSelectedItems((prev) => prev.filter((name) => name !== item.name));
    }
  }, []);

  const handleSelectAll = useCallback(
    (checked: boolean) => {
      if (checked) {
        const availableItems = data.map((item) => item.name);
        setSelectedItems(availableItems);
      } else {
        setSelectedItems([]);
      }
    },
    [data]
  );

  const canDownload = useMemo(() => {
    if (selectedItems.length === 0) return false;

    // Check if all selected items are available
    return selectedItems.every((itemName) => {
      const item = data.find((d) => d.name === itemName);
      return item && item.status === STATUSES.AVAILABLE;
    });
  }, [selectedItems, data]);

  const selectionState = useMemo(() => {
    const totalItemsCount = data.length;

    if (selectedItems.length === 0) {
      return { checked: false, indeterminate: false };
    } else if (selectedItems.length === totalItemsCount) {
      return { checked: true, indeterminate: false };
    } else {
      return { checked: false, indeterminate: true };
    }
  }, [selectedItems, data]);

  return {
    selectedItems,
    handleSelectItem,
    handleSelectAll,
    canDownload,
    selectionState,
  };
}
