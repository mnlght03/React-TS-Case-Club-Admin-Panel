import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

export default function DragAndDrop({ droppableId, children }: IDragAndDropProps) {
  return (
    <>
      <DragDropContext>
        <Droppable droppableId={droppableId}>
          {(provided: any) => (
            <ul
              className="w-full"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {children}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
}
