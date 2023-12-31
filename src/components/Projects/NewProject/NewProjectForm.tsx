import React from 'react';
import TextInput from '../../ui/Input/TextInput';
import CheckboxInput from '../../ui/Input/CheckboxInput';
import ImageInput from '../../ui/Input/ImageInput';
import FormInputRow from './FormInputRow';
import ProjectStagesDnd from '../DragAndDrop/ProjectStagesDnd';
import AddStageForm from './AddStageForm';
import BlueButton from '../../ui/Button/BlueButton';
import { IFormProps } from '../../../interfaces/Form/IFormProps';
import { useNewProjectForm } from '../../../hooks/Projects/useNewProjectForm';
import { IProject } from '../../../interfaces/Projects/models/IProject';

export default function NewProjectForm({ onSubmit }: IFormProps<IProject>) {
  const {
    newProject,
    setProjectTitle,
    setProjectThisYear,
    addStage,
    deleteStage,
    updateFile,
    clearNewProject,
    onDragEnd,
  } = useNewProjectForm();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(newProject);
        clearNewProject();
      }}
    >
      <FormInputRow>
        <TextInput
          placeholder={'Введите здесь...'}
          width="400px"
          label="Название проекта"
          subscript="Не больше 110 символов, включая пробелы и знаки препинания"
          limit={110}
          value={newProject.title}
          onChange={setProjectTitle}
        />
        <ImageInput
          placeholder={'Загрузить картинку'}
          width="400px"
          label="Логотип компании"
          subscript="Без фона, не больше 5 МБ и разрешением не меньше 210x50 пикселей"
          onChange={updateFile}
        />
        <CheckboxInput
          name={'ProjectName'}
          width="400px"
          label="Проект этого года?"
          subscript="Влияет на вкладку проекта"
          checked={newProject.isThisYear}
          onChange={setProjectThisYear}
        />
      </FormInputRow>
      <FormInputRow>
        <div className="w-80 font-medium ml-12 font-semibold">Название этапа</div>
        <div className="w-80 font-medium font-semibold">Временной интервал</div>
        <div className="w-44 font-medium font-semibold">Охват</div>
        <div className="w-44 font-medium font-semibold">Участники</div>
      </FormInputRow>
      <ProjectStagesDnd
        onDragEnd={onDragEnd}
        items={newProject.stages}
        droppableId={'ProjectStages'}
        onDelete={deleteStage}
      />
      <AddStageForm addStageFn={addStage} />
      <BlueButton
        type="submit"
        text={'Сохранить'}
        classes="ml-10 mt-6"
      />
    </form>
  );
}
