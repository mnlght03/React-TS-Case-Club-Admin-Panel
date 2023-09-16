import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

import { ReactComponent as IconDrag } from '../../../assets/icons/icon-drag.svg';
import { ReactComponent as IconEdit } from '../../../assets/icons/icon-edit.svg';
import { ReactComponent as IconTrash } from '../../../assets/icons/icon-trash.svg';
import { ReactComponent as IconDownload } from '../../../assets/icons/icon-download.svg';

interface IProps {
  title: string;
  isLastYear: boolean;
  logo: string;
  draggableId: string;
  index: number;
}

export default function DraggableItem({
  title,
  isLastYear,
  logo,
  draggableId,
  index,
}: IProps) {
  return (
    <Draggable
      draggableId={draggableId}
      index={index}
    >
      {(provided: any) => (
        <li
          className="flex px-10 py-6 w-full border-t border-b border-gray_button_inactive bg-white"
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <div {...provided.dragHandleProps}>
            <IconDrag className="cursor-pointer mr-9" />
          </div>
          <div className="w-96 font-medium">{title}</div>
          <div className="w-64 font-medium ml-32">{isLastYear ? 'да' : 'нет'}</div>
          <div className="w-44 font-medium ml-32">
            <span className="text-blue">{logo}</span>
            <IconDownload className="inline ml-4" />
          </div>
          <IconEdit className="cursor-pointer ml-auto" />
          <IconTrash className="cursor-pointer ml-4" />
        </li>
      )}
    </Draggable>
  );
}
