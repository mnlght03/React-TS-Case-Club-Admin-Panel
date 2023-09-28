import { IDraggableProps } from "../DragAndDrop/IDraggableProps";

export interface ICurrentProjectDraggableProps extends IDraggableProps {
  name: string;
  description: string;
  presentationUrl: string;
}
