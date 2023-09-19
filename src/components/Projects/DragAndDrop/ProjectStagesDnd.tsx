import { IProjectStagesDndProps } from '../../../interfaces/Projects/IProjectStagesDndProps';
import DragAndDrop from '../../DragAndDrop/DragAndDrop';
import ProjectStageDraggable from './ProjectStageDraggable';

export default function ProjectStagesDnd({ items }: IProjectStagesDndProps) {
  return (
    <>
      <DragAndDrop droppableId={'Projects'}>
        {items.map((item) => (
          <ProjectStageDraggable
            key={item.id}
            draggableId={item.id.toString()}
            index={item.id}
            name={item.name}
            timeframe={item.timeframe}
            coverage={item.coverage}
            attendee={item.attendee}
          />
        ))}
      </DragAndDrop>
    </>
  );
}
