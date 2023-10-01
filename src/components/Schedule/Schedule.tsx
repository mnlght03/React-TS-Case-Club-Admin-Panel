import React, { useState } from 'react';
import Header from '../Header/Header';
import { usePage } from '../../hooks/Page/usePage';
import ScheduleService from '../../services/Schedule/ScheduleService';
import { ChangesStatus } from '../../enums/ChangesStatus';
import SchedulesHeader from './SchedulesHeader';
import ScheduleDnd from './DragAndDrop/ScheduleDnd';
import ClosableWindow from '../ClosableWindow/ClosableWindow';
import NewScheduleForm from './NewScheduleForm';
import BlueButton from '../Button/BlueButton';
import { ISchedule } from '../../interfaces/Schedule/models/ISchedule';

export default function Schedule() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

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
      <SchedulesHeader />
      <ScheduleDnd
        items={schedules}
        droppableId={'Schdule'}
        onDragEnd={onDragEnd}
        onDelete={deleteSchedule}
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
          <NewScheduleForm
            onSubmit={(schedule: ISchedule) => {
              console.log(schedule);
              addNewSchedule(schedule);
              setIsVisible(false);
            }}
          />
        </ClosableWindow>
      )}
    </>
  );
}
