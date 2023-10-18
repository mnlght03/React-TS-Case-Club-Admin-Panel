import React from 'react';
import { IGalleryDraggableProps } from '../../interfaces/Gallery/IGalleryDraggableProps';
import DraggableItem from '../ui/DragAndDrop/DraggableItem';

export default function GalleryDraggable({
  draggableId,
  index,
  name,
  photoCount,
  onEdit,
  onDelete,
}: IGalleryDraggableProps) {
  return (
    <DraggableItem
      draggableId={draggableId}
      index={index}
      onEdit={onEdit}
      onDelete={onDelete}
    >
      <div className="w-96 font-semibold">{name}</div>
      <div className="w-44 font-semibold ml-32">{photoCount}</div>
    </DraggableItem>
  );
}
