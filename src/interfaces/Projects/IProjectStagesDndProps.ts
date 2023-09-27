import { IDragAndDropProps } from '../DragAndDrop/IDragAndDropProps';
import { IProjectStage } from './models/IProjectStage';

export interface IProjectStagesDndProps extends IDragAndDropProps {
  items: IProjectStage[];
}
