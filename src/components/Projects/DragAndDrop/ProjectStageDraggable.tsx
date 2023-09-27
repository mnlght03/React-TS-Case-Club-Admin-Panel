import React from 'react';

import DraggableItem from '../../DragAndDrop/DraggableItem';
import { IProjectStageDraggableProps } from '../../../interfaces/Projects/IProjectStageDraggableProps';

export default function ProjectStageDraggable({
  draggableId,
  index,
  name,
  timeframe,
  coverage,
  attendee,
  onEdit,
  onDelete
}: IProjectStageDraggableProps) {
  return (
    <DraggableItem
      draggableId={draggableId}
      index={index}
      onEdit={onEdit}
      onDelete={onDelete}
    >
      <div className="w-80 font-medium">{name}</div>
      <div className="w-80 font-medium ml-8">{timeframe}</div>
      <div className="w-44 font-medium ml-8">{coverage}</div>
      <div className="w-44 font-medium ml-8">{attendee}</div>
    </DraggableItem>
  );
}
