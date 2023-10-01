import { TagColor } from '../../enums/TagColor';
import { IDraggableProps } from '../DragAndDrop/IDraggableProps';

export interface IOurTeamDraggableProps extends IDraggableProps {
  name: string;
  telegram: string;
  role: string;
  tagColor: TagColor;
}
