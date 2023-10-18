import { IDragAndDropProps } from "../../interfaces/DragAndDrop/IDragAndDropProps";
import { IPartner } from "../../interfaces/Partners/IPartner";
import DragAndDrop from "../ui/DragAndDrop/DragAndDrop";
import PartnerDraggable from "./PartnerDraggable";

export default function PartnersDnd({
  items,
  droppableId,
  onDragEnd,
  onEdit,
  onDelete,
}: IDragAndDropProps<IPartner>) {
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
