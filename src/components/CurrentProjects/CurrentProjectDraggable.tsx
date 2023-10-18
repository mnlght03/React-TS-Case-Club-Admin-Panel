import React from "react";
import { ICurrentProjectDraggableProps } from "../../interfaces/CurrentProjects/ICurrentProjectDraggableProps";
import DraggableItem from "../ui/DragAndDrop/DraggableItem";
import DownloadableLink from "../ui/Link/DownloadableLink.tsx";

export default function CurrentProjectDraggable({
  draggableId,
  index,
  name,
  description,
  presentationUrl,
  onEdit,
  onDelete,
}: ICurrentProjectDraggableProps) {
  return (
    <DraggableItem
      draggableId={draggableId}
      index={index}
      onEdit={onEdit}
      onDelete={onDelete}
    >
      <div className="w-96 font-medium">{name}</div>
      <div className="w-64 font-medium ml-32">{description}</div>
      <div className="w-44 font-medium ml-32 flex items-center">
        <DownloadableLink fileUrl={presentationUrl} />
      </div>
    </DraggableItem>
  );
}
