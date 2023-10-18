import React from 'react';
import { IDragAndDropProps } from '../../interfaces/DragAndDrop/IDragAndDropProps';
import { IGalleryEvent } from '../../interfaces/Gallery/models/IGalleryEvent';
import DragAndDrop from '../ui/DragAndDrop/DragAndDrop';
import GalleryDraggable from './GalleryDraggable';

export default function GalleryDnd({
  items,
  droppableId,
  onDragEnd,
  onEdit,
  onDelete,
}: IDragAndDropProps<IGalleryEvent>) {
  return (
    <>
      <DragAndDrop
        onDragEnd={onDragEnd}
        droppableId={droppableId}
      >
        {items.map((item, idx) => (
          <GalleryDraggable
            key={item.id}
            draggableId={item.id.toString()}
            index={idx}
            name={item.name}
            photoCount={item.photos?.length ?? 0}
            onEdit={() => onEdit && onEdit(item)}
            onDelete={() => onDelete && onDelete(item)}
          />
        ))}
      </DragAndDrop>
    </>
  );
}
