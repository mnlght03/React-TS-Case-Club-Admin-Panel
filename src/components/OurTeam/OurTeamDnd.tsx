import React from "react";
import DragAndDrop from "../DragAndDrop/DragAndDrop";
import { IDragAndDropProps } from "../../interfaces/DragAndDrop/IDragAndDropProps";
import { ITeamMember } from "../../interfaces/OurTeam/models/ITeamMember";
import OurTeamDraggable from "./OurTeamDraggable";

export default function OurTeamDnd({
  items,
  droppableId,
  onDragEnd,
  onEdit,
  onDelete,
}: IDragAndDropProps<ITeamMember>) {
  return (
    <>
      <DragAndDrop
        onDragEnd={onDragEnd}
        droppableId={droppableId}
      >
        {items.map((item, idx) => (
          <OurTeamDraggable
            key={item.id}
            draggableId={item.id.toString()}
            index={idx}
            name={item.name}
            telegram={item.telegram}
            role={item.role}
            tagColor={item.tagColor}
            onEdit={() => onEdit && onEdit(item)}
            onDelete={() => onDelete && onDelete(item)}
          />
        ))}
      </DragAndDrop>
    </>
  );
}
