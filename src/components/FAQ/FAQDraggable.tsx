import React from 'react';
import DraggableItem from '../ui/DragAndDrop/DraggableItem';
import { IFAQDraggableProps } from '../../interfaces/FAQ/IFAQDraggableProps';

export default function FAQDraggable({
  question,
  answer,
  draggableId,
  index,
  onEdit,
  onDelete,
}: IFAQDraggableProps) {
  return (
    <DraggableItem
      draggableId={draggableId}
      index={index}
      onEdit={onEdit}
      onDelete={onDelete}
    >
      <div className="w-80 font-medium">{question}</div>
      <div className="w-80 font-medium ml-32">{answer}</div>
    </DraggableItem>
  );
}
