import React from 'react';
import { IFormProps } from '../../interfaces/Form/IFormProps';
import { useNewCurrentProject } from '../../hooks/CurrentProjects/useNewCurrentProject';
import FormInputRow from '../Projects/NewProject/FormInputRow';
import TextInput from '../ui/Input/TextInput';
import BlueButton from '../ui/Button/BlueButton';
import Input from '../ui/Input/Input';
import { ICurrentProject } from '../../interfaces/CurrentProjects/ICurrentProject';

export default function NewCurrentProjectForm({ onSubmit }: IFormProps<ICurrentProject>) {
  const {
    newProject,
    setProjectName,
    setProjectDescription,
    setProjectFormat,
    setProjectStartDate,
    setProjectFirstPlateText,
    setProjectSecondPlateText,
    setProjectThirdPlateText,
    setProjectRegistrationLink,
    updateFile,
    clearNewProject,
  } = useNewCurrentProject();

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
          label="Название проекта"
          placeholder="Введите здесь..."
          width="350px"
          subscript="Не больше 25 символов, включая пробелыи знаки препинания"
          onChange={setProjectName}
          required
        />
        <TextInput
          label="Описание проекта"
          placeholder="Введите здесь..."
          width="350px"
          subscript="Не больше 80 символов, включая пробелыи знаки препинания"
          onChange={setProjectDescription}
          required
        />
        <Input
          label="Презентация"
          subscript="В формате PDF, не больше 5 МБ"
          type="file"
          accept=".ppt, .pptx, .pdf"
          onChange={updateFile}
        />
      </FormInputRow>
      <FormInputRow>
        <TextInput
          label="Формат проведения"
          placeholder="Введите здесь..."
          width="350px"
          subscript="Не больше 20 символов, включая пробелыи знаки препинания"
          onChange={setProjectFormat}
          required
        />
        <TextInput
          label="Дата старта чемпионата"
          placeholder="Введите здесь..."
          width="350px"
          subscript="Не больше 20 символов, включая пробелыи знаки препинания"
          onChange={setProjectStartDate}
          required
        />
        <TextInput
          label="Ссылка на подачу заявки"
          placeholder="Введите здесь..."
          width="350px"
          onChange={setProjectRegistrationLink}
          required
        />
      </FormInputRow>
      <FormInputRow>
        <TextInput
          label="Текст первой плашки"
          placeholder="Введите здесь..."
          width="350px"
          subscript="Не больше 110 символов, включая пробелыи знаки препинания"
          onChange={setProjectFirstPlateText}
          required
        />
        <TextInput
          label="Текст второй плашки"
          placeholder="Введите здесь..."
          width="350px"
          subscript="Не больше 50 символов, включая пробелыи знаки препинания"
          onChange={setProjectSecondPlateText}
          required
        />
        <TextInput
          label="Текст третьей плашки"
          placeholder="Введите здесь..."
          width="350px"
          subscript="Не больше 50 символов, включая пробелыи знаки препинания"
          onChange={setProjectThirdPlateText}
          required
        />
      </FormInputRow>
      <BlueButton
        type="submit"
        text={'Сохранить'}
        classes="ml-10 mt-6"
      />
    </form>
  );
}
