import React from 'react';
import { IFormProps } from '../../interfaces/Form/IFormProps';
import FormInputRow from '../Projects/NewProject/FormInputRow';
import TextInput from '../ui/Input/TextInput';
import ImageInput from '../ui/Input/ImageInput';
import { ReactComponent as IconAddInactive } from '../../assets/icons/icon-add-inactive.svg';
import { ReactComponent as IconAddActive } from '../../assets/icons/icon-add-active.svg';
import { useNewPartnerForm } from '../../hooks/Partners/useNewPartnerForm';
import { IPartner } from '../../interfaces/Partners/IPartner';


export default function AddPartnerForm({ onSubmit }: IFormProps<IPartner>) {
  const {
    newPartner,
    setPartnerText,
    setPartnerAttendees,
    updateFile,
    clearNewPartner,
    isFormFilled
  } = useNewPartnerForm();

  const submitPartner = () => {
    onSubmit(newPartner);
    clearNewPartner();
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className='ml-14'
    >
      <FormInputRow>
        <TextInput
          width="384px"
          subscript="Не больше 60 символов, включая пробелы и знаки препинания"
          limit={60}
          placeholder="Текст о сотрудничестве"
          value={newPartner.text}
          onChange={setPartnerText}
          required
        />
        <TextInput 
          width="176px"
          placeholder="Кол-во участников"
          value={newPartner.attendees}
          onChange={setPartnerAttendees}
          required
        />
        <ImageInput
          width="256px"
          placeholder="Логотип компании"
          subscript='Логотип должен быть без фона, и не больше 5 МБ'
          onChange={updateFile}
          required
        />
        {isFormFilled ? (
          <IconAddActive
            className="cursor-pointer"
            onClick={submitPartner}
          />
        ) : (
          <IconAddInactive />
        )}
      </FormInputRow>
    </form>
  );
}
