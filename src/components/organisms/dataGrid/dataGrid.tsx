import DataGridHeader from "../../molecules/dataGridHeader";
import DataGridRow from "../../molecules/dataGridRow";

import { useSelection } from "../../../hooks/useSelection";
import { formatSelectedItemsForAlert } from "../../../utils/formatters";

import { COLUMN_CONFIG } from "../../../constants";

import styles from "./dataGrid.module.css";
import { FileData } from "../../../types";

interface DatagridProps {
  data: FileData[];
}

const DataGrid: React.FC<DatagridProps> = ({ data }) => {
  const {
    selectedItems,
    handleSelectItem,
    handleSelectAll,
    canDownload,
    selectionState,
  } = useSelection(data);

  const handleDownloadSelected = () => {
    const selectedItemsData = data.filter((item) =>
      selectedItems.includes(item.name)
    );

    const alertMessage = formatSelectedItemsForAlert(selectedItemsData);
    alert(`Selected items:\n${alertMessage}`);
  };

  return (
    <div className={styles.container}>
      <DataGridHeader
        selectedItems={selectedItems}
        selectionState={selectionState}
        onSelectAll={handleSelectAll}
        onDownloadSelected={handleDownloadSelected}
        canDownload={canDownload}
      />

      <div className={styles.tableContainer}>
        <table
          className={styles.table}
          aria-labelledby="datagrid-title"
          role="grid"
        >
          <thead>
            <tr role="row">
              {COLUMN_CONFIG.map((column) => (
                <th role="columnheader" key={column.key}>
                  {column.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <DataGridRow
                key={item.name}
                item={item}
                isSelected={selectedItems.includes(item.name)}
                onSelect={(checked) => handleSelectItem(item, checked)}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataGrid;
