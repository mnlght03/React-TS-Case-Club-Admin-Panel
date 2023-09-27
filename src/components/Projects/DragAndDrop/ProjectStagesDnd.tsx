import { IProjectStagesDndProps } from '../../../interfaces/Projects/IProjectStagesDndProps';
import DragAndDrop from '../../DragAndDrop/DragAndDrop';
import ProjectStageDraggable from './ProjectStageDraggable';

export default function ProjectStagesDnd({
  items,
  droppableId,
  onDragEnd,
  onEdit,
  onDelete,
}: IProjectStagesDndProps) {
  return (
    <>
      <DragAndDrop
        onDragEnd={onDragEnd}
        droppableId={droppableId}
      >
        {items.map((item, idx) => (
          <ProjectStageDraggable
            key={item.id}
            draggableId={item.id.toString()}
            index={idx}
            name={item.name}
            timeframe={item.timeframe}
            coverage={item.coverage}
            attendee={item.attendee}
            onEdit={() => onEdit && onEdit(item)}
            onDelete={() => onDelete && onDelete(item)}
          />
        ))}
      </DragAndDrop>
    </>
  );
}
