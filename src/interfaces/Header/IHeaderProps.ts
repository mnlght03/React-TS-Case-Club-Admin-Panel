import { ChangesStatus } from '../enums/ChangesStatus';

export interface IHeaderProps {
  title: string;
  status?: ChangesStatus;
  onClose?: () => void;
  onUpload?: () => Promise<void>;
}
