import React from 'react';
import DragAndDropItem from './DragAndDropItem';
import BlueButton from '../../Button/BlueButton';

export default function DragAndDrop() {
  return (
    <div className="w-full">
      <DragAndDropItem />
      <DragAndDropItem />
      <DragAndDropItem />
      <BlueButton text={'Добавить'} classes='ml-10 mt-6'/>
    </div>
  );
}
