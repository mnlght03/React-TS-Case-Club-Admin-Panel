import React from 'react';
import { IScheduleDraggableProps } from '../../../interfaces/Schedule/IScheduleDraggableProps';
import DraggableItem from '../../DragAndDrop/DraggableItem';

export default function ScheduleDraggable({
  draggableId,
  index,
  name,
  date,
  registrationLink,
  onEdit,
  onDelete,
}: IScheduleDraggableProps) {
  return (
    <DraggableItem
      draggableId={draggableId}
      index={index}
      onEdit={onEdit}
      onDelete={onDelete}
    >
      <div className="w-96 font-medium">{name}</div>
      <div className="w-64 font-medium ml-32">{date}</div>
      <div className="w-44 font-medium ml-32 flex items-center">
        <a className="text-blue ">{registrationLink}</a>
      </div>
    </DraggableItem>
  );
}
