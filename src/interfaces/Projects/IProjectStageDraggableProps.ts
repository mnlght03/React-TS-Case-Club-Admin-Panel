import { IDraggableProps } from "../DragAndDrop/IDraggableProps";

export interface IProjectStageDraggableProps extends IDraggableProps {
  name: string;
  timeframe: string;
  coverage: string;
  attendee: string;
}
