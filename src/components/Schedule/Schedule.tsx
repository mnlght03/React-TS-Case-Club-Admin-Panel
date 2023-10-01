import React from 'react';
import Header from '../Header/Header';
import { usePage } from '../../hooks/Page/usePage';
import ScheduleService from '../../services/Schedule/ScheduleService';
import { ChangesStatus } from '../../interfaces/enums/ChangesStatus';

export default function Schedule() {
  const {
    items: schedules,
    status,
    addNewItem: addNewSchedule,
    deleteItem: deleteSchedule,
    onDragEnd,
    publishChanges,
  } = usePage(new ScheduleService());
  return (
    <>
      <Header
        title={'Расписание мероприятий'}
        status={status || ChangesStatus.NONE}
        onUpload={publishChanges}
      />
      
    </>
  );
}
