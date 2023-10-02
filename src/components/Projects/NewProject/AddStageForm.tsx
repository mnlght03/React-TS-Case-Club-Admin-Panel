import React from 'react';
import FormInputRow from './FormInputRow';
import TextInput from '../../ui/Input/TextInput';
import { IProjectStage } from '../../../interfaces/Projects/models/IProjectStage';
import { ReactComponent as IconAddInactive } from '../../../assets/icons/icon-add-inactive.svg';
import { ReactComponent as IconAddActive } from '../../../assets/icons/icon-add-active.svg';
import { useNewStageForm } from '../../../hooks/Projects/useNewStageForm';

interface IProps {
  addStageFn: (stage: IProjectStage) => void;
}

export default function AddStageForm({ addStageFn }: IProps) {
  const {
    newStage,
    setNewStageName,
    setNewStageTimeframe,
    setNewStageCoverage,
    setNewStageAttendee,
    clearNewStage,
    isFormFilled,
  } = useNewStageForm();

  const addStage = () => {
    addStageFn(newStage);
    clearNewStage();
  };

  return (
    <>
      <FormInputRow>
        <TextInput
          width="320px"
          subscript="Не больше 70 символов, включая пробелы и знаки препинания"
          limit={70}
          placeholder="Название этапа"
          value={newStage.name}
          onChange={setNewStageName}
        />
        <TextInput
          width="320px"
          subscript="Не больше 30 символов, включая пробелы и знаки препинания"
          placeholder="Временной интервал"
          limit={30}
          value={newStage.timeframe}
          onChange={setNewStageTimeframe}
        />
        <TextInput
          width="176px"
          subscript="Можно оставить поле пустым"
          placeholder="Охват"
          value={newStage.coverage}
          onChange={setNewStageCoverage}
        />
        <TextInput
          width="176px"
          subscript="Можно оставить поле пустым"
          placeholder="Участники"
          value={newStage.attendee}
          onChange={setNewStageAttendee}
        />
        {isFormFilled ? (
          <IconAddActive
            className="cursor-pointer"
            onClick={addStage}
          />
        ) : (
          <IconAddInactive />
        )}
      </FormInputRow>
    </>
  );
}
