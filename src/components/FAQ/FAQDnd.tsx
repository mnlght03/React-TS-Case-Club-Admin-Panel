import React from 'react';
import DragAndDrop from '../DragAndDrop/DragAndDrop';
import { IDragAndDropProps } from '../../interfaces/DragAndDrop/IDragAndDropProps';
import { IFAQ } from '../../interfaces/FAQ/models/IFAQ';
import FAQDraggable from './FAQDraggable';

export default function FAQDnd({
  items,
  droppableId,
  onDragEnd,
  onEdit,
  onDelete,
}: IDragAndDropProps<IFAQ>) {
  return (
    <>
      <DragAndDrop
        onDragEnd={onDragEnd}
        droppableId={droppableId}
      >
        {items.map((item, idx) => (
          <FAQDraggable
            key={item.id}
            draggableId={item.id.toString()}
            index={idx}
            question={item.question}
            answer={item.answer}
            onEdit={() => onEdit && onEdit(item)}
            onDelete={() => onDelete && onDelete(item)}
          />
        ))}
      </DragAndDrop>
    </>
  );
}
