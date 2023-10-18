import React from 'react';

import DraggableItem from '../../ui/DragAndDrop/DraggableItem';
import { IProjectDraggableProps } from '../../../interfaces/Projects/IProjectDraggableProps';
import DownloadableLink from "../../ui/Link/DownloadableLink.tsx";

export default function ProjectDraggable({
  draggableId,
  index,
  title,
  isLastYear,
  logoUrl,
  onEdit,
  onDelete,
}: IProjectDraggableProps) {
  return (
    <DraggableItem
      draggableId={draggableId}
      index={index}
      onEdit={onEdit}
      onDelete={onDelete}
    >
      <div className="w-96 font-medium">{title}</div>
      <div className="w-64 font-medium ml-32">{isLastYear ? 'да' : 'нет'}</div>
      <div className="w-44 font-medium ml-32 flex items-center">
        <DownloadableLink fileUrl={logoUrl} />
      </div>
    </DraggableItem>
  );
}
