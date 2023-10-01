export interface IDragAndDropProps<T> {
  items: T[];
  droppableId: string;
  children?: React.ReactNode;
  onDragEnd?: (result: any) => void;
  onEdit?: (item: T) => void;
  onDelete?: (item: T) => void;
}
