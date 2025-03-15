import { STATUSES } from "../constants";

export interface FileData {
  name: string;
  device: string;
  path: string;
  status: typeof STATUSES.AVAILABLE | typeof STATUSES.SCHEDULED;
}
