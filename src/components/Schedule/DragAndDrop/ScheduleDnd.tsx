import { IDragAndDropProps } from '../../../interfaces/DragAndDrop/IDragAndDropProps';
import { ISchedule } from '../../../interfaces/Schedule/models/ISchedule';
import DragAndDrop from '../../DragAndDrop/DragAndDrop';
import ScheduleDraggable from './ScheduleDraggable';

export default function ScheduleDnd({
  items,
  droppableId,
  onDragEnd,
  onEdit,
  onDelete,
}: IDragAndDropProps<ISchedule>) {
  return (
    <>
      <DragAndDrop
        onDragEnd={onDragEnd}
        droppableId={droppableId}
      >
        {items.map((item, idx) => (
          <ScheduleDraggable
            key={item.id}
            draggableId={item.id.toString()}
            index={idx}
            name={item.name}
            date={item.date}
            registrationLink={item.registrationLink}
            onEdit={() => onEdit && onEdit(item)}
            onDelete={() => onDelete && onDelete(item)}
          />
        ))}
      </DragAndDrop>
    </>
  );
}
