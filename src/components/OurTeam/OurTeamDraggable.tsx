import React from 'react';
import DraggableItem from '../DragAndDrop/DraggableItem';
import { IOurTeamDraggableProps } from '../../interfaces/OurTeam/IOurTeamDraggableProps';

export default function OurTeamDraggable({
  draggableId,
  index,
  name,
  telegram,
  role,
  tagColor,
  onEdit,
  onDelete,
}: IOurTeamDraggableProps) {
  return (
    <DraggableItem
      draggableId={draggableId}
      index={index}
      onEdit={onEdit}
      onDelete={onDelete}
    >
      <div className="w-96 font-medium">{name}</div>
      <div className="w-64 font-medium ml-32">{telegram}</div>
      <div className="w-44 font-medium ml-32">{role}</div>
      <div className="w-44 font-medium ml-32">{tagColor}</div>
    </DraggableItem>
  );
}
