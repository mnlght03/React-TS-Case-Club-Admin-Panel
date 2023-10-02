import React, { useState } from 'react';
import Header from '../Header/Header';
import { usePage } from '../../hooks/Page/usePage';
import GalleryService from '../../services/Gallery/GalleryService';
import { ChangesStatus } from '../../enums/ChangesStatus';
import GalleryHeader from './GalleryHeader';
import GalleryDnd from './GalleryDnd';
import BlueButton from '../Button/BlueButton';
import ClosableWindow from '../ClosableWindow/ClosableWindow';
import NewGalleryEventForm from './NewGalleryEventForm';
import { IGalleryEvent } from '../../interfaces/Gallery/models/IGalleryEvent';

export default function Gallery() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const {
    items: events,
    status,
    addNewItem: addNewEvent,
    deleteItem: deleteEvent,
    onDragEnd,
    publishChanges,
  } = usePage(new GalleryService());

  return (
    <>
      <Header
        title={'Мероприятия / Галерея'}
        status={status || ChangesStatus.NONE}
        onUpload={publishChanges}
      />
      <GalleryHeader />
      <GalleryDnd
        items={events}
        droppableId={'Gallery'}
        onDragEnd={onDragEnd}
        onDelete={deleteEvent}
      />
      <BlueButton
        onClick={() => setIsVisible(true)}
        text={'Добавить'}
        classes="ml-10 mt-6"
      />
      {isVisible && (
        <ClosableWindow
          onClose={() => setIsVisible(false)}
          title={'Новый текущий проект'}
        >
          <NewGalleryEventForm
            onSubmit={(event: IGalleryEvent) => {
              console.log(event);
              addNewEvent(event);
              setIsVisible(false);
            }}
          />
        </ClosableWindow>
      )}
    </>
  );
}
