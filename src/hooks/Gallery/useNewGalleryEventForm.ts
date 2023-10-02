import { useMemo, useState } from 'react';
import { IGalleryEvent } from '../../interfaces/Gallery/models/IGalleryEvent';

export function useNewGalleryEventForm() {
  const getClearEvent = (): IGalleryEvent => ({
    id: Date.now(),
    priorityId: 0,
    name: '',
    photoFiles: [],
    photos: [],
  });

  const [newEvent, setNewEvent] = useState<IGalleryEvent>(getClearEvent());

  const setEventName = (value: string) => {
    setNewEvent({ ...newEvent, name: value });
  };

  const addFiles = (files: File[]) => {
    if (!files || files.length === 0) return;
    const fileNames = files.map((file: File) => file.name);
    setNewEvent({
      ...newEvent,
      photoFiles: newEvent.photoFiles?.concat(files),
      photos: newEvent.photos?.concat(fileNames),
    });
  };

  const clearNewEvent = () => {
    setNewEvent(getClearEvent());
  };

  const photoChunks = useMemo(() => {
    const arr: string[] = [];
    for (let i = 0; i < Math.floor(newEvent.photos.length / 4); i++) {
      arr.push(newEvent.photos.slice(i * 4, i * 4 + 4));
    }
    return arr;
  }, [newEvent.photos]);

  return {
    newEvent,
    setEventName,
    addFiles,
    photoChunks,
    clearNewEvent,
  };
}
