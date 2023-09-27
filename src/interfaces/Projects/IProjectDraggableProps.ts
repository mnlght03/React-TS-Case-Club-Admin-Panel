import { IDraggableProps } from "../DragAndDrop/IDraggableProps";

export interface IProjectDraggableProps extends IDraggableProps {
  title: string;
  isLastYear: boolean;
  logo: string;
  onEdit?: (item: any) => void;
  onDelete?: (item: any) => void;
}
