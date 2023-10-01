import React from "react";
import DragAndDrop from "../DragAndDrop/DragAndDrop";
import CurrentProjectDraggable from "./CurrentProjectDraggable";
import { IDragAndDropProps } from "../../interfaces/DragAndDrop/IDragAndDropProps";
import { ICurrentProject } from "../../interfaces/CurrentProjects/ICurrentProject";

export default function ProjectsDnd({
  items,
  droppableId,
  onDragEnd,
  onEdit,
  onDelete,
}: IDragAndDropProps<ICurrentProject>) {
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
