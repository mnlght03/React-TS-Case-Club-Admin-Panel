import React, { useMemo, useState } from 'react';
import { IFormProps } from '../../interfaces/Form/IFormProps';
import FormInputRow from '../Projects/NewProject/FormInputRow';
import ImageInput from '../ui/Input/ImageInput';
import { ReactComponent as IconAddInactive } from '../../assets/icons/icon-add-inactive.svg';
import { ReactComponent as IconAddActive } from '../../assets/icons/icon-add-active.svg';

export default function NewPhotosForm({ onSubmit }: IFormProps<File[]>) {
  const [files, setFiles] = useState<(File | undefined)[]>([
    undefined,
    undefined,
    undefined,
    undefined,
  ]);

  const setFile = (newFile: File, idx: number) => {
    const newFiles = files.map((oldFile, i) => (i === idx ? newFile : oldFile));
    setFiles(newFiles);
  };

  const isFormFilled = useMemo(() => !files.includes(undefined), [files]);

  const submitFiles = () => {
    onSubmit && onSubmit(files);
    setFiles([undefined, undefined, undefined, undefined]);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <FormInputRow>
        <ImageInput
          onChange={(e) => setFile(e.target.files[0], 0)}
          subscript="Не больше 5 МБ"
          required
        />
        <ImageInput
          onChange={(e) => setFile(e.target.files[0], 1)}
          subscript="Не больше 5 МБ"
          required
        />
        <ImageInput
          onChange={(e) => setFile(e.target.files[0], 2)}
          subscript="Не больше 5 МБ"
          required
        />
        <ImageInput
          onChange={(e) => setFile(e.target.files[0], 3)}
          subscript="Не больше 5 МБ"
          required
        />
        {isFormFilled ? (
          <IconAddActive
            className="cursor-pointer"
            onClick={submitFiles}
          />
        ) : (
          <IconAddInactive />
        )}
      </FormInputRow>
    </form>
  );
}
