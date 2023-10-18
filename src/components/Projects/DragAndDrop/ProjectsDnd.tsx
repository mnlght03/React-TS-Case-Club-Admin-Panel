import { IDragAndDropProps } from '../../../interfaces/DragAndDrop/IDragAndDropProps';
import { IProject } from '../../../interfaces/Projects/models/IProject';
import DragAndDrop from '../../ui/DragAndDrop/DragAndDrop';
import ProjectDraggable from './ProjectDraggable';

export default function ProjectsDnd({
  items,
  droppableId,
  onDragEnd,
  onEdit,
  onDelete,
}: IDragAndDropProps<IProject>) {
  return (
    <>
      <DragAndDrop
        onDragEnd={onDragEnd}
        droppableId={droppableId}
      >
        {items.map((item, idx) => (
          <ProjectDraggable
            key={item.id}
            draggableId={item.id.toString()}
            index={idx}
            title={item.title}
            isLastYear={item.isThisYear}
            logo={item.logoUrl || ''}
            onEdit={() => onEdit && onEdit(item)}
            onDelete={() => onDelete && onDelete(item)}
          />
        ))}
      </DragAndDrop>
    </>
  );
}
