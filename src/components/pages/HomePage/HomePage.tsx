import DataGrid from "../../organisms/dataGrid";

import data from "../../../assets/data.json";

import styles from "./HomePage.module.css";

const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title} id="datagrid-title">
        DataGrid
      </h2>

      <DataGrid data={data} />
    </div>
  );
};

export default HomePage;
