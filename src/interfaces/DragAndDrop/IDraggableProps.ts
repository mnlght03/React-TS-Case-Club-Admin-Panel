export interface IDraggableProps {
  draggableId: string;
  index: number;
  children?: React.ReactNode;
  onEdit?: (item: any) => void;
  onDelete?: (item: any) => void;
}
