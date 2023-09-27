import { IProjectsDndProps } from '../../../interfaces/Projects/IProjectsDndProps';
import DragAndDrop from '../../DragAndDrop/DragAndDrop';
import ProjectDraggable from './ProjectDraggable';

export default function ProjectsDnd({
  items,
  droppableId,
  onDragEnd,
  onEdit,
  onDelete,
}: IProjectsDndProps) {
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
