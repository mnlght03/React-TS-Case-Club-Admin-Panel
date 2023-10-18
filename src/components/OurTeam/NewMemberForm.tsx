import React from 'react';
import { IFormProps } from '../../interfaces/Form/IFormProps';
import { ITeamMember } from '../../interfaces/OurTeam/models/ITeamMember';
import { useNewTeamMember } from '../../hooks/OurTeam/useNewTeamMember';
import FormInputRow from '../Projects/NewProject/FormInputRow';
import TextInput from '../ui/Input/TextInput';
import SelectInput from '../ui/Input/SelectInput';
import { TagColor } from '../../enums/TagColor';
import ImageInput from '../ui/Input/ImageInput';
import BlueButton from '../ui/Button/BlueButton';

export default function NewMemberForm({ onSubmit }: IFormProps<ITeamMember>) {
  const {
    newMember,
    setMemberName,
    setMemberTelegram,
    setMemberRole,
    setMemberTagColor,
    updateFile,
    clearNewMember,
  } = useNewTeamMember();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(newMember);
        clearNewMember();
      }}
    >
      <FormInputRow>
        <TextInput
          label="Имя и фамилия"
          placeholder="Имя и фамилия"
          subscript="Не больше 20 символов, включая пробелы и знаки препинания"
          limit={20}
          width="350px"
          onChange={setMemberName}
          required
        />
        <TextInput
          label="Ник в телеграм"
          placeholder="Ник в телеграм"
          subscript="Без @, например, NikFivePro"
          width="350px"
          onChange={setMemberTelegram}
          required
        />
        <TextInput
          label="Роль в клубе"
          placeholder="Роль в клубе"
          subscript="Не больше 20 символов"
          limit={20}
          width="350px"
          onChange={setMemberRole}
          required
        />
      </FormInputRow>
      <FormInputRow>
        <SelectInput
          label="Цвет роли"
          subscript="Не больше 20 символов, включая пробелы и знаки препинания"
          limit={20}
          width="350px"
          onChange={setMemberTagColor}
          required
          name={'color'}
          options={Object.values(TagColor)}
        />
        <ImageInput
          label="Фото профиля"
          width="350px"
          onChange={updateFile}
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
