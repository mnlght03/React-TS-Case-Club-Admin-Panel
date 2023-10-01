import { useState } from 'react';
import { ISchedule } from '../../interfaces/Schedule/models/ISchedule';
import { TagColor } from '../../enums/TagColor';

export function useNewScheduleForm() {
  const getClearSchedule = () => ({
    id: Date.now(),
    priorityId: 0,
    name: '',
    description: '',
    date: '',
    registrationLink: '',
    firstTag: '',
    secondTag: '',
    tagColor: TagColor.BLUE,
  });

  const [newSchedule, setNewSchedule] = useState<ISchedule>(getClearSchedule());

  const clearNewSchedule = () => {
    setNewSchedule(getClearSchedule());
  };

  const setScheduleName = (value: string) => {
    setNewSchedule({ ...newSchedule, name: value });
  };

  const setScheduleDescription = (value: string) => {
    setNewSchedule({ ...newSchedule, description: value });
  };

  const setScheduleDate = (value: string) => {
    setNewSchedule({ ...newSchedule, date: value });
  };

  const setScheduleRegistrationLink = (value: string) => {
    setNewSchedule({ ...newSchedule, registrationLink: value });
  };

  const setScheduleFirstTag = (value: string) => {
    setNewSchedule({ ...newSchedule, firstTag: value });
  };

  const setScheduleSecondTag = (value: string) => {
    setNewSchedule({ ...newSchedule, secondTag: value });
  };

  const setScheduleTagColor = (value: TagColor) => {
    setNewSchedule({ ...newSchedule, tagColor: value });
  };

  return {
    newSchedule,
    clearNewSchedule,
    setScheduleName,
    setScheduleDate,
    setScheduleDescription,
    setScheduleRegistrationLink,
    setScheduleFirstTag,
    setScheduleSecondTag,
    setScheduleTagColor,
  };
}
