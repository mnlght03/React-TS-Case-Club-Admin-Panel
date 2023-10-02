import React from 'react';
import { IFormProps } from '../../interfaces/Form/IFormProps';
import { IFAQ } from '../../interfaces/FAQ/models/IFAQ';
import { useNewFaqForm } from '../../hooks/FAQ/useNewFaqForm';
import FormInputRow from '../Projects/NewProject/FormInputRow';
import TextInput from '../ui/Input/TextInput';
import { ReactComponent as IconAddInactive } from '../../assets/icons/icon-add-inactive.svg';
import { ReactComponent as IconAddActive } from '../../assets/icons/icon-add-active.svg';

export default function AddFaqForm({ onSubmit }: IFormProps<IFAQ>) {
  const { newFaq, clearFaq, setQuestion, setAnswer, isFormFilled } = useNewFaqForm();

  const submitFaq = () => {
    onSubmit && onSubmit(newFaq);
    clearFaq();
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="ml-14"
    >
      <FormInputRow>
        <TextInput
          width="320px"
          limit={100}
          subscript="Не больше 100 символов, включая пробелы и знаки препинания"
          placeholder='Вопрос'
          value={newFaq.question}
          onChange={setQuestion}
          required
        />
        <TextInput
          width="320px"
          limit={500}
          subscript="Не больше 500 символов, включая пробелы и знаки препинания"
          placeholder='Ответ'
          value={newFaq.answer}
          onChange={setAnswer}
          required
        />
        {isFormFilled ? (
          <IconAddActive
            className="cursor-pointer"
            onClick={submitFaq}
          />
        ) : (
          <IconAddInactive />
        )}
      </FormInputRow>
    </form>
  );
}
