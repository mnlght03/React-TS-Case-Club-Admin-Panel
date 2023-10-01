import React from 'react';
import { IFormProps } from '../../interfaces/Form/IFormProps';
import { ITeamMember } from '../../interfaces/OurTeam/models/ITeamMember';
import { useNewTeamMember } from '../../hooks/OurTeam/useNewTeamMember';
import FormInputRow from '../Projects/NewProject/FormInputRow';
import TextInput from '../ui/Input/TextInput';
import SelectInput from '../ui/Input/SelectInput';
import { TagColor } from '../../enums/TagColor';
import ImageInput from '../ui/Input/ImageInput';

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
          width="350px"
          onChange={(e) => setMemberName(e.target.value)}
          required
        />
        <TextInput
          label="Ник в телеграм"
          placeholder="Ник в телеграм"
          subscript="Без @, например, NikFivePro"
          width="350px"
          onChange={(e) => setMemberTelegram(e.target.value)}
          required
        />
        <TextInput
          label="Роль в клубе"
          placeholder="Роль в клубе"
          subscript="Не больше 20 символов"
          width="350px"
          onChange={(e) => setMemberRole(e.target.value)}
          required
        />
      </FormInputRow>
      <FormInputRow>
        <SelectInput
          label="Цвет роли"
          subscript="Не больше 20 символов, включая пробелы и знаки препинания"
          width="350px"
          onChange={(e) => setMemberTagColor(e.target.value)}
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
    </form>
  );
}
