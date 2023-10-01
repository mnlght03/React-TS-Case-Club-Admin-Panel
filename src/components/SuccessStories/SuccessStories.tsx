import React, { useState } from 'react';
import Header from '../Header/Header';
import SuccessStoriesService from '../../services/SuccessStories/SuccessStoriesService';
import { usePage } from '../../hooks/Page/usePage';
import { ChangesStatus } from '../../enums/ChangesStatus';
import SuccessStoriesHeader from './SuccessStoriesHeader';
import SuccessStoriesDnd from './SuccessStoriesDnd';
import BlueButton from '../Button/BlueButton';
import ClosableWindow from '../ClosableWindow/ClosableWindow';
import NewStoryForm from './NewStoryForm';
import { ISuccessStory } from '../../interfaces/SuccessStories/models/ISuccessStory';

export default function SuccessStories() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const {
    items: stories,
    status,
    addNewItem: addNewStory,
    deleteItem: deleteStory,
    onDragEnd,
    publishChanges,
  } = usePage(new SuccessStoriesService());

  return (
    <>
      <Header
        title={'Истории успеха'}
        status={status || ChangesStatus.NONE}
        onUpload={publishChanges}
      />
      <SuccessStoriesHeader />
      <SuccessStoriesDnd
        items={stories}
        droppableId={'SuccessStories'}
        onDragEnd={onDragEnd}
        onDelete={deleteStory}
      />
      <BlueButton
        onClick={() => setIsVisible(true)}
        text={'Добавить'}
        classes="ml-10 mt-6"
      />
      {isVisible && (
        <ClosableWindow
          onClose={() => setIsVisible(false)}
          title={'Новая история успеха'}
        >
          <NewStoryForm
            onSubmit={(story: ISuccessStory) => {
              console.log(story);
              addNewStory(story);
              setIsVisible(false);
            }}
          />
        </ClosableWindow>
      )}
    </>
  );
}
