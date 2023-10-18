import React from 'react';
import DraggableItem from '../ui/DragAndDrop/DraggableItem';
import { ISuccessStoriesDraggableProps } from '../../interfaces/SuccessStories/ISuccessStoriesDraggableProps';
import DownloadableLink from "../ui/Link/DownloadableLink.tsx";

export default function SuccessStoriesDraggable({
  draggableId,
  index,
  name,
  position,
  profilePhotoUrl,
  onEdit,
  onDelete,
}: ISuccessStoriesDraggableProps) {
  return (
    <DraggableItem
      draggableId={draggableId}
      index={index}
      onEdit={onEdit}
      onDelete={onDelete}
    >
      <div className="w-64 font-medium">{name}</div>
      <div className="w-64 font-medium ml-32">{position}</div>
      <div className="w-64 font-medium ml-32 flex items-center">
        <DownloadableLink fileUrl={profilePhotoUrl} />
      </div>
    </DraggableItem>
  );
}
