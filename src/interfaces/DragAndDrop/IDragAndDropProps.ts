export interface IDragAndDropProps {
  droppableId: string;
  children?: React.ReactNode;
  onDragEnd?: (result: any) => void;
  onEdit?: (item: any) => void;
  onDelete?: (item: any) => void;
}
