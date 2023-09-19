import React, { useState } from 'react';
import TextInput from '../../ui/Input/TextInput';
import FileInput from '../../ui/Input/FileInput';
import CheckboxInput from '../../ui/Input/CheckboxInput';
import FormInputRow from './FormInputRow';
import ProjectStagesDnd from '../DragAndDrop/ProjectStagesDnd';
import { IProject } from '../../../interfaces/Projects/models/IProject';
import { IProjectStage } from '../../../interfaces/Projects/models/IProjectStage';
import AddStageForm from './AddStageForm';
import BlueButton from '../../Button/BlueButton';

interface IProps {
  onSubmit: (project: IProject) => void;
}

export default function NewProjectForm({ onSubmit }: IProps) {
  const [newProject, setNewProject] = useState<IProject>({
    id: 0,
    priorityId: 0,
    title: '',
    logoUrl: '',
    isThisYear: false,
    stages: [] as IProjectStage[],
  });

  const addStage = (stage: IProjectStage) => {
    setNewProject({
      ...newProject,
      stages: [...newProject.stages, stage],
    });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(newProject);
      }}
    >
      <FormInputRow>
        <TextInput
          placeholder={'Введите здесь...'}
          width="400px"
          label="Название проекта"
          subscript="Не больше 110 символов, включая пробелы и знаки препинания"
          limit={110}
          onChange={(e) => console.log(e.target.value)}
        />
        <FileInput
          placeholder={'Загрузить картинку'}
          width="400px"
          label="Логотип компании"
          subscript="Без фона, не больше 5 МБ и разрешением не меньше 210x50 пикселей"
          onChange={console.log}
        />
        <CheckboxInput
          name={'ProjectName'}
          width="400px"
          label="Проект этого года?"
          subscript="Влияет на вкладку проекта"
          onChange={console.log}
        />
      </FormInputRow>
      <FormInputRow>
        <div className="w-80 font-medium ml-12 font-semibold">Название этапа</div>
        <div className="w-80 font-medium font-semibold">Временной интервал</div>
        <div className="w-44 font-medium font-semibold">Охват</div>
        <div className="w-44 font-medium font-semibold">Участники</div>
      </FormInputRow>
      <ProjectStagesDnd items={newProject.stages} />
      <AddStageForm addStageFn={addStage} />
      <BlueButton
        type="submit"
        text={'Сохранить'}
        classes="ml-10 mt-6"
      />
    </form>
  );
}
