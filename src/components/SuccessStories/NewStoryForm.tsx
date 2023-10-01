import React from 'react';
import { IFormProps } from '../../interfaces/Form/IFormProps';
import FormInputRow from '../Projects/NewProject/FormInputRow';
import TextInput from '../ui/Input/TextInput';
import BlueButton from '../Button/BlueButton';
import { ISuccessStory } from '../../interfaces/SuccessStories/models/ISuccessStory';
import { useNewSuccessStory } from '../../hooks/SuccessStories/useNewSuccessStory';
import SelectInput from '../ui/Input/SelectInput';
import { TagColor } from '../../enums/TagColor';
import ImageInput from '../ui/Input/ImageInput';
import TextAreaInput from '../ui/Input/TextAreaInput';

export default function NewStoryForm({ onSubmit }: IFormProps<ISuccessStory>) {
  const {
    newStory,
    setStoryName,
    setStoryStory,
    setStoryFirstTag,
    setStorySecondTag,
    setStoryTagColor,
    setStoryPosition,
    updateProfilePhoto,
    updateFullsizePhoto,
    clearNewStory,
  } = useNewSuccessStory();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(newStory);
        clearNewStory();
      }}
    >
      <FormInputRow>
        <TextInput
          label="Имя и фамилия"
          placeholder="Введите здесь..."
          width="256px"
          subscript="Не больше 20 символов, включая пробелыи знаки препинания"
          limit={20}
          onChange={setStoryName}
          required
        />
        <SelectInput
          label="Цвет тегов"
          subscript="Это повлияет на цвет тегов"
          name={'StoryColor'}
          options={Object.values(TagColor)}
          onChange={setStoryTagColor}
        />
        <TextInput
          label="Текст первичного тега"
          placeholder="Введите здесь..."
          width="256px"
          subscript="Не больше 25 символов, включая пробелыи знаки препинания"
          limit={25}
          onChange={setStoryFirstTag}
          required
        />
        <TextInput
          label="Текст вторичного тега"
          placeholder="Введите здесь..."
          width="256px"
          subscript="Не больше 25 символов, включая пробелыи знаки препинания"
          limit={25}
          onChange={setStorySecondTag}
          required
        />
      </FormInputRow>
      <FormInputRow>
        <TextInput
          label="Должность"
          placeholder="Введите здесь..."
          width="256px"
          subscript="Не больше 20 символов, включая пробелыи знаки препинания"
          limit={25}
          onChange={setStoryPosition}
          required
        />
        <ImageInput
          label="Фотография профиля"
          subscript="Не больше 5 МБ"
          onChange={updateProfilePhoto}
          required
        />
        <ImageInput
          label="Фотография в полном размере"
          subscript="Не больше 5 МБ"
          onChange={updateFullsizePhoto}
          required
        />
      </FormInputRow>
      <FormInputRow>
        <TextAreaInput
          label="История"
          placeholder="Введите текст..."
          subscript="Не должен превышать 300 символов, включая пробелы и знаки препинания"
          onChange={setStoryStory}
          limit={300}
        />
      </FormInputRow>
      <BlueButton
        type="submit"
        text={'Сохранить'}
        classes="ml-10"
      />
    </form>
  );
}
