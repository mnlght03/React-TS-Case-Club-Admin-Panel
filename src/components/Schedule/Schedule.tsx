import React, {useContext, useState} from 'react';
import Header from '../ui/Header/Header';
import { ChangesStatus } from '../../enums/ChangesStatus';
import SchedulesHeader from './SchedulesHeader';
import ScheduleDnd from './DragAndDrop/ScheduleDnd';
import ClosableWindow from '../ui/ClosableWindow/ClosableWindow';
import NewScheduleForm from './NewScheduleForm';
import BlueButton from '../ui/Button/BlueButton';
import { ISchedule } from '../../interfaces/Schedule/models/ISchedule';
import {GlobalContext} from "../../store";

export default function Schedule() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const {schedule} = useContext(GlobalContext)

  return (
    <>
      <Header
        title={'Расписание мероприятий'}
        status={schedule.status || ChangesStatus.NONE}
        onUpload={schedule.publishChanges}
      />
      <SchedulesHeader />
      <ScheduleDnd
        items={schedule.items}
        droppableId={'Schdule'}
        onDragEnd={schedule.onDragEnd}
        onDelete={schedule.deleteItem}
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
            onSubmit={(newSchedule: ISchedule) => {
              console.log(newSchedule);
              schedule.addNewItem(newSchedule);
              setIsVisible(false);
            }}
          />
        </ClosableWindow>
      )}
    </>
  );
}
