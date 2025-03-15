import Checkbox from "../../atoms/Checkbox/Checkbox";
import StatusIndicator from "../../atoms/StatusIndicator/StatusIndicator";

import { FileData } from "../../../types";

import styles from "./dataGridRow.module.css";

interface DataGridRowProps {
  item: FileData;
  isSelected: boolean;
  onSelect: (checked: boolean) => void;
}

const DataGridRow: React.FC<DataGridRowProps> = ({
  item,
  isSelected,
  onSelect,
}) => {
  const { name, device, path, status } = item;

  return (
    <tr className={styles.row} role="row" aria-selected={isSelected}>
      <td role="gridcell">
        <Checkbox
          checked={isSelected}
          onChange={onSelect}
          label={`Select ${name}`}
        />
      </td>
      <td role="gridcell">{name}</td>
      <td role="gridcell">{device}</td>
      <td role="gridcell">{path}</td>
      <td role="gridcell">
        <StatusIndicator status={status} />
      </td>
    </tr>
  );
};

export default DataGridRow;
