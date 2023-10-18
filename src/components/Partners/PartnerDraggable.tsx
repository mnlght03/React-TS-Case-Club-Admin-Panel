import React from 'react';
import { IPartnerDrabbableProps } from '../../interfaces/Partners/IPartnerDraggableProps';
import DraggableItem from '../ui/DragAndDrop/DraggableItem';
import DownloadableLink from "../ui/Link/DownloadableLink.tsx";

export default function PartnerDraggable({
  draggableId,
  index,
  text,
  attendees,
  logoUrl,
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
        <DownloadableLink fileUrl={logoUrl} />
      </div>
    </DraggableItem>
  );
}
