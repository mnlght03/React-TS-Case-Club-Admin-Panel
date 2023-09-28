import { IPartnersDndProps } from "../../interfaces/Partners/IPartnersDndProps";
import DragAndDrop from "../DragAndDrop/DragAndDrop";
import PartnerDraggable from "./PartnerDraggable";

export default function PartnersDnd({
  items,
  droppableId,
  onDragEnd,
  onEdit,
  onDelete,
}: IPartnersDndProps) {
  return (
    <>
      <DragAndDrop
        onDragEnd={onDragEnd}
        droppableId={droppableId}
      >
        {items.map((item, idx) => (
          <PartnerDraggable
            key={item.id}
            draggableId={item.id.toString()}
            index={idx}
            text={item.text}
            attendees={item.attendees}
            logo={item.logoUrl || ''}
            onEdit={() => onEdit && onEdit(item)}
            onDelete={() => onDelete && onDelete(item)}
          />
        ))}
      </DragAndDrop>
    </>
  );
}
