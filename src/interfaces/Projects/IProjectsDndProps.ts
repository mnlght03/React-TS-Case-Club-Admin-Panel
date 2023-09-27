import { IDragAndDropProps } from '../DragAndDrop/IDragAndDropProps';
import { IProject } from './models/IProject';

export interface IProjectsDndProps extends IDragAndDropProps {
  items: IProject[];
}
