import React from 'react';
import { ReactComponent as IconDownload } from '../../assets/icons/icon-download.svg';
import { IPartnerDrabbableProps } from '../../interfaces/Partners/IPartnerDraggableProps';
import DraggableItem from '../ui/DragAndDrop/DraggableItem';

export default function PartnerDraggable({
  draggableId,
  index,
  text,
  attendees,
  logo,
  onEdit,
  onDelete,
}: IPartnerDrabbableProps) {
  return (
    <DraggableItem
      draggableId={draggableId}
      index={index}
      onEdit={onEdit}
      onDelete={onDelete}
    >
      <div className="w-96 font-medium">{text}</div>
      <div className="w-44 font-medium ml-8">{attendees}</div>
      <div className="w-44 font-medium ml-8 flex items-center">
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
