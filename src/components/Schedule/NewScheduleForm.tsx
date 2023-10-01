import React from 'react';
import { IFormProps } from '../../interfaces/Form/IFormProps';
import { ISchedule } from '../../interfaces/Schedule/models/ISchedule';
import { useNewScheduleForm } from '../../hooks/Schedule/useNewScheduleForm';
import FormInputRow from '../Projects/NewProject/FormInputRow';
import TextInput from '../ui/Input/TextInput';
import SelectInput from '../ui/Input/SelectInput';
import { TagColor } from '../../enums/TagColor';
import BlueButton from '../Button/BlueButton';

export default function NewSchdeuleForm({ onSubmit }: IFormProps<ISchedule>) {
  const {
    newSchedule,
    clearNewSchedule,
    setScheduleName,
    setScheduleDate,
    setScheduleDescription,
    setScheduleRegistrationLink,
    setScheduleFirstTag,
    setScheduleSecondTag,
    setScheduleTagColor,
  } = useNewScheduleForm();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(newSchedule);
        clearNewSchedule();
      }}
    >
      <FormInputRow>
        <TextInput
          label="Название мероприятия"
          placeholder="Введите здесь"
          subscript="Не больше 35 символов, включая пробелы и знаки препинания"
          limit={35}
          width="350px"
          onChange={setScheduleName}
          required
        />
        <TextInput
          label="Описание мероприятия"
          placeholder="Введите здесь"
          subscript="Не больше 140 символов, включая пробелы и знаки препинания"
          limit={140}
          width="350px"
          onChange={setScheduleDescription}
          required
        />
        <TextInput
          label="Даты проведения"
          placeholder="Введите здесь"
          subscript="Не больше 20 символов, включая пробелы и знаки препинания"
          limit={20}
          width="350px"
          onChange={setScheduleDate}
          required
        />
      </FormInputRow>
      <FormInputRow>
        <TextInput
          label="Ссылка на подачу заявки"
          placeholder="Введите здесь"
          subscript="Не больше 100 символов, включая пробелы и знаки препинания"
          limit={100}
          width="350px"
          onChange={setScheduleRegistrationLink}
          required
        />
        <TextInput
          label="Текст первичного тега"
          placeholder="Введите здесь"
          subscript="Не больше 15 символов, включая пробелы и знаки препинания"
          limit={15}
          width="350px"
          onChange={setScheduleFirstTag}
          required
        />
        <TextInput
          label="Текст вторичного тега"
          placeholder="Введите здесь"
          subscript="Не больше 115 символов, включая пробелы и знаки препинания"
          limit={115}
          width="350px"
          onChange={setScheduleSecondTag}
          required
        />
      </FormInputRow>
      <FormInputRow>
        <SelectInput
          name={'TagColor'}
          options={Object.values(TagColor)}
          label="Цвет тегов"
          subscript="Это повлияет на цвет тегов"
          width="350px"
          onChange={setScheduleTagColor}
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
