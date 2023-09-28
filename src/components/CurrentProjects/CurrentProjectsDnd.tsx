import React from "react";
import { ICurrentProjectsDndProps } from "../../interfaces/CurrentProjects/ICurrentProjectsDndProps";
import DragAndDrop from "../DragAndDrop/DragAndDrop";
import CurrentProjectDraggable from "./CurrentProjectDraggable";

export default function ProjectsDnd({
  items,
  droppableId,
  onDragEnd,
  onEdit,
  onDelete,
}: ICurrentProjectsDndProps) {
  return (
    <>
      <DragAndDrop
        onDragEnd={onDragEnd}
        droppableId={droppableId}
      >
        {items.map((item, idx) => (
          <CurrentProjectDraggable
            key={item.id}
            draggableId={item.id.toString()}
            index={idx}
            name={item.name}
            description={item.description}
            presentationUrl={item.presentationFileUrl ?? ''}
            onEdit={() => onEdit && onEdit(item)}
            onDelete={() => onDelete && onDelete(item)}
          />
        ))}
      </DragAndDrop>
    </>
  );
}
