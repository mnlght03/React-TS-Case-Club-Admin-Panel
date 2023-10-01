import { useState } from 'react';
import { ISuccessStory } from '../../interfaces/SuccessStories/models/ISuccessStory';
import { TagColor } from '../../enums/TagColor';

export function useNewSuccessStory() {
  const getClearStory = (): ISuccessStory => ({
    id: Date.now(),
    priorityId: 0,
    name: '',
    story: '',
    firstTag: '',
    secondTag: '',
    tagColor: TagColor.BLUE,
    position: '',
    profilePhotoUrl: '',
    fullSizePhotoUrl: '',
    profilePhotoFile: undefined,
    fullSizePhotoFile: undefined,
  });

  const [newStory, setNewStory] = useState<ISuccessStory>(getClearStory());

  const setStoryName = (name: string) => {
    setNewStory({ ...newStory, name: name });
  };

  const setStoryFirstTag = (value: string) => {
    setNewStory({ ...newStory, firstTag: value });
  };

  const setStorySecondTag = (value: string) => {
    setNewStory({ ...newStory, secondTag: value });
  };

  const setStoryTagColor = (value: TagColor) => {
    setNewStory({ ...newStory, tagColor: value });
  };

  const setStoryPosition = (value: string) => {
    setNewStory({ ...newStory, position: value });
  };

  const setStoryStory = (value: string) => {
    setNewStory({ ...newStory, story: value });
  };

  const clearNewStory = () => {
    setNewStory(getClearStory());
  };

  const updateProfilePhoto = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setNewStory({ ...newStory, profilePhotoFile: file, profilePhotoUrl: file.name });
  };

  const updateFullsizePhoto = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setNewStory({ ...newStory, fullSizePhotoFile: file, fullSizePhotoUrl: file.name });
  };

  return {
    newStory,
    setStoryName,
    setStoryStory,
    setStoryFirstTag,
    setStorySecondTag,
    setStoryTagColor,
    setStoryPosition,
    updateProfilePhoto,
    updateFullsizePhoto,
    clearNewStory,
  };
}
