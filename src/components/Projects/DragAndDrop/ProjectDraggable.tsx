import React from 'react';

import { ReactComponent as IconDownload } from '../../../assets/icons/icon-download.svg';
import DraggableItem from '../../DragAndDrop/DraggableItem';
import { IProjectDraggableProps } from '../../../interfaces/Projects/IProjectDraggableProps';

export default function ProjectDraggable({
  draggableId,
  index,
  title,
  isLastYear,
  logo,
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
        <span className="text-blue ">{logo}</span>
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