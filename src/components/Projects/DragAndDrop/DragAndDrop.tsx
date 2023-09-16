import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import BlueButton from '../../Button/BlueButton';
import DraggableItem from './DraggableItem';

export default function ProjectsDnd() {
  const dragItems = [
    {
      id: 1,
      title: 'Курс по Product Owner-тематике и кейс-чемпионат совместно с Билайн',
      isLastYear: true,
      logo: 'beeline.png',
    },
    {
      id: 2,
      title: 'Курс по Product Owner-тематике и кейс-чемпионат совместно с Билайн',
      isLastYear: true,
      logo: 'beeline.png',
    },
    {
      id: 3,
      title: 'Курс по Product Owner-тематике и кейс-чемпионат совместно с Билайн',
      isLastYear: true,
      logo: 'beeline.png',
    },
  ];
  return (
    <>
      <DragDropContext>
        <Droppable droppableId="projects">
          {(provided: any) => (
            <ul
              className="w-full"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {dragItems.map((item) => {
                return (
                  <DraggableItem
                    draggableId={item.id.toString()}
                    key={item.id}
                    title={item.title}
                    isLastYear={true}
                    logo={'beeline.png'}
                    index={item.id}
                  />
                );
              })}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
      <BlueButton
        text={'Добавить'}
        classes="ml-10 mt-6"
      />
    </>
  );
}
