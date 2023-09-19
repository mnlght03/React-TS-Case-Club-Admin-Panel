import React, { useMemo, useState } from 'react';
import FormInputRow from './FormInputRow';
import TextInput from '../../ui/Input/TextInput';
import { IProjectStage } from '../../../interfaces/Projects/models/IProjectStage';
import { ReactComponent as IconAddInactive } from '../../../assets/icons/icon-add-inactive.svg';
import { ReactComponent as IconAddActive } from '../../../assets/icons/icon-add-active.svg';

interface IProps {
  addStageFn: (stage: IProjectStage) => void;
}

export default function AddStageForm({ addStageFn }: IProps) {
  const [newStage, setNewStage] = useState<IProjectStage>({
    id: 0,
    priorityId: 0,
    name: '',
    timeframe: '',
    coverage: '',
    attendee: '',
  });

  const isFormFilled = useMemo(
    () => newStage.name != '' && newStage.timeframe != '',
    [newStage]
  );

  const addStage = () => {
    addStageFn({ ...newStage, id: Date.now(), priorityId: Date.now() });
    setNewStage({
      id: 0,
      priorityId: 0,
      name: '',
      timeframe: '',
      coverage: '',
      attendee: '',
    });
  };

  return (
    <>
      <FormInputRow>
        <TextInput
          width="320px"
          subscript="Не больше 70 символов, включая пробелы и знаки препинания"
          placeholder="Название этапа"
          value={newStage.name}
          onChange={(e) => setNewStage({...newStage, name: e.target.value})}
        />
        <TextInput
          width="320px"
          subscript="Не больше 30 символов, включая пробелы и знаки препинания"
          placeholder="Временной интервал"
          value={newStage.timeframe}
          onChange={(e) => setNewStage({...newStage, timeframe: e.target.value})}
        />
        <TextInput
          width="176px"
          subscript="Можно оставить поле пустым"
          placeholder="Охват"
          value={newStage.coverage}
          onChange={(e) => setNewStage({...newStage, coverage: e.target.value})}
        />
        <TextInput
          width="176px"
          subscript="Можно оставить поле пустым"
          placeholder="Участники"
          value={newStage.attendee}
          onChange={(e) => setNewStage({...newStage, attendee: e.target.value})}
        />
        {isFormFilled ? <IconAddActive className='cursor-pointer' onClick={addStage} /> : <IconAddInactive />}
      </FormInputRow>
    </>
  );
}
