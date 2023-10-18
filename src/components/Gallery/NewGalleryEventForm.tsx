import React from 'react';
import { IGalleryEvent } from '../../interfaces/Gallery/models/IGalleryEvent';
import { useNewGalleryEventForm } from '../../hooks/Gallery/useNewGalleryEventForm';
import NewPhotosForm from './NewPhotosForm';
import { IFormProps } from '../../interfaces/Form/IFormProps';
import FormInputRow from '../Projects/NewProject/FormInputRow';
import TextInput from '../ui/Input/TextInput';
import BlueButton from '../ui/Button/BlueButton';

export default function NewGalleryEventForm({ onSubmit }: IFormProps<IGalleryEvent>) {
  const { newEvent, setEventName, addFiles, clearNewEvent, photoChunks } =
    useNewGalleryEventForm();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(newEvent);
        clearNewEvent();
      }}
    >
      <FormInputRow>
        <TextInput
          placeholder={'Введите здесь...'}
          width="400px"
          label="Название мероприятия"
          subscript="Не больше 100 символов, включая пробелы и знаки препинания"
          limit={110}
          value={newEvent.name}
          onChange={setEventName}
        />
      </FormInputRow>
      <FormInputRow>
        <div className="w-80 font-medium ml-12 font-semibold">Фото 1</div>
        <div className="w-80 font-medium font-semibold">Фото 2</div>
        <div className="w-80 font-medium font-semibold">Фото 3</div>
        <div className="w-80 font-medium font-semibold">Фото 4</div>
      </FormInputRow>
      {photoChunks.map((chunk, idx) => (
        <FormInputRow key={idx}>
          <div className="w-80 font-medium ml-12 font-semibold">{chunk[0]}</div>
          <div className="w-80 font-medium font-semibold">{chunk[1]}</div>
          <div className="w-80 font-medium font-semibold">{chunk[2]}</div>
          <div className="w-80 font-medium font-semibold">{chunk[3]}</div>
        </FormInputRow>
      ))}
      <NewPhotosForm onSubmit={addFiles} />
      <BlueButton
        type="submit"
        text={'Сохранить'}
        classes="ml-10 mt-6"
      />
    </form>
  );
}
