import React, {useContext, useState} from 'react';
import Header from '../ui/Header/Header';
import { ChangesStatus } from '../../enums/ChangesStatus';
import SuccessStoriesHeader from './SuccessStoriesHeader';
import SuccessStoriesDnd from './SuccessStoriesDnd';
import BlueButton from '../ui/Button/BlueButton';
import ClosableWindow from '../ui/ClosableWindow/ClosableWindow';
import NewStoryForm from './NewStoryForm';
import { ISuccessStory } from '../../interfaces/SuccessStories/models/ISuccessStory';
import {GlobalContext} from "../../store";

export default function SuccessStories() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const {successStories} = useContext(GlobalContext);

  return (
    <>
      <Header
        title={'Истории успеха'}
        status={successStories.status || ChangesStatus.NONE}
        onUpload={successStories.publishChanges}
      />
      <SuccessStoriesHeader />
      <SuccessStoriesDnd
        items={successStories.items}
        droppableId={'SuccessStories'}
        onDragEnd={successStories.onDragEnd}
        onDelete={successStories.deleteItem}
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
              successStories.addNewItem(story);
              setIsVisible(false);
            }}
          />
        </ClosableWindow>
      )}
    </>
  );
}
