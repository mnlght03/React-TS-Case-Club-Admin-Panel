import React from "react";
import DragAndDrop from "../DragAndDrop/DragAndDrop";
import { IDragAndDropProps } from "../../interfaces/DragAndDrop/IDragAndDropProps";
import { ISuccessStory } from "../../interfaces/SuccessStories/models/ISuccessStory";
import SuccessStoriesDraggable from "./SuccessStoriesDraggable";

export default function SuccessStoriesDnd({
  items,
  droppableId,
  onDragEnd,
  onEdit,
  onDelete,
}: IDragAndDropProps<ISuccessStory>) {
  return (
    <>
      <DragAndDrop
        onDragEnd={onDragEnd}
        droppableId={droppableId}
      >
        {items.map((item, idx) => (
          <SuccessStoriesDraggable
            key={item.id}
            draggableId={item.id.toString()}
            index={idx}
            name={item.name}
            position={item.position}
            profilePhotoUrl={item.profilePhotoUrl ?? ''}
            onEdit={() => onEdit && onEdit(item)}
            onDelete={() => onDelete && onDelete(item)}
          />
        ))}
      </DragAndDrop>
    </>
  );
}
