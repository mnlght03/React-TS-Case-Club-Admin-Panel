import { IDragAndDropProps } from '../../../interfaces/DragAndDrop/IDragAndDropProps';
import { IProjectStage } from '../../../interfaces/Projects/models/IProjectStage';
import DragAndDrop from '../../ui/DragAndDrop/DragAndDrop';
import ProjectStageDraggable from './ProjectStageDraggable';

export default function ProjectStagesDnd({
  items,
  droppableId,
  onDragEnd,
  onEdit,
  onDelete,
}: IDragAndDropProps<IProjectStage>) {
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
