import React from 'react';
import { ReactComponent as IconDownload } from '../../assets/icons/icon-download.svg';
import DraggableItem from '../DragAndDrop/DraggableItem';
import { foldString } from '../../util/foldString';
import { ISuccessStoriesDraggableProps } from '../../interfaces/SuccessStories/ISuccessStoriesDraggableProps';

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
        <span className="text-blue ">{foldString(profilePhotoUrl, 50)}</span>
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
