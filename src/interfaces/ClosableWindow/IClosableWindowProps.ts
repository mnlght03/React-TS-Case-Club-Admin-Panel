export interface IClosableWindowProps {
  title: string;
  children: React.ReactNode;
  onClose?: () => void;
}
