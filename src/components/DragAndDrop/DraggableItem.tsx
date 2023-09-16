import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

import { ReactComponent as IconDrag } from '../../assets/icons/icon-drag.svg';
import { ReactComponent as IconEdit } from '../../assets/icons/icon-edit.svg';
import { ReactComponent as IconTrash } from '../../assets/icons/icon-trash.svg';

export default function DraggableItem({ draggableId, index, children }: IProps) {
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
          {children}
          <IconEdit className="cursor-pointer ml-auto" />
          <IconTrash className="cursor-pointer ml-4" />
        </li>
      )}
    </Draggable>
  );
}
