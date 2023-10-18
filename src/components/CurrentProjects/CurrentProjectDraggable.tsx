import React from "react";
import { ReactComponent as IconDownload } from '../../assets/icons/icon-download.svg';
import { ICurrentProjectDraggableProps } from "../../interfaces/CurrentProjects/ICurrentProjectDraggableProps";
import DraggableItem from "../ui/DragAndDrop/DraggableItem";

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
        <span className="text-blue ">{presentationUrl}</span>
        <IconDownload
          className="inline ml-4"
          style={{
            minWidth: '20px',
            minHeight: '20px',
          }}
        />
      </div>
    </DraggableItem>
  );
}
