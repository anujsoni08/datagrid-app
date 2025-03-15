import Checkbox from "../../atoms/Checkbox/Checkbox";
import Button from "../../atoms/Button/Button";

import { CHECKBOX_STATES } from "../../../constants";
import download from "../../../assets/download.svg";

import styles from "./DataGridHeader.module.css";

interface DataGridHeaderProps {
  selectedItems: string[];
  selectionState: { checked: boolean; indeterminate: boolean };
  onSelectAll: (checked: boolean) => void;
  onDownloadSelected: () => void;
  canDownload: boolean;
}

const DataGridHeader: React.FC<DataGridHeaderProps> = ({
  selectedItems,
  selectionState,
  onSelectAll,
  onDownloadSelected,
  canDownload,
}) => {
  let labelText = CHECKBOX_STATES.NONE_SELECTED;
  if (selectedItems.length > 0) {
    labelText = `${selectedItems.length} ${CHECKBOX_STATES.SOME_SELECTED}`;
  }

  return (
    <div className={styles.header}>
      <div className={styles.checkbox}>
        <Checkbox
          checked={selectionState.checked}
          indeterminate={selectionState.indeterminate}
          onChange={onSelectAll}
          label="Select all available items"
        />
        <span className={styles.checkboxStatus}>{labelText}</span>
      </div>
      <Button
        className={styles.downloadBtn}
        disabled={!canDownload}
        onClick={onDownloadSelected}
      >
        <img src={download} alt="download-img" />
        Download Selected
      </Button>
    </div>
  );
};

export default DataGridHeader;
