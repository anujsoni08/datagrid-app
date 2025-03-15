import { STATUSES } from "../../../constants";

import styles from "./StatusIndicator.module.css";

export interface StatusIndicatorProps {
  status: typeof STATUSES.AVAILABLE | typeof STATUSES.SCHEDULED;
}

const StatusIndicator: React.FC<StatusIndicatorProps> = ({ status }) => {
  const isAvailable = status === STATUSES.AVAILABLE;

  return (
    <div className={styles.container}>
      {isAvailable && <span className={styles.dot} aria-hidden="true" />}
      <span>{status.charAt(0).toUpperCase() + status.slice(1)}</span>
    </div>
  );
};

export default StatusIndicator;
