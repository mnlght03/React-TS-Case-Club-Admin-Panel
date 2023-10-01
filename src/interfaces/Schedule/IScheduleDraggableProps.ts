import { IDraggableProps } from '../DragAndDrop/IDraggableProps';

export interface IScheduleDraggableProps extends IDraggableProps {
  name: string;
  date: string;
  registrationLink: string;
}
