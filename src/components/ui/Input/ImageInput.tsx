import React from 'react';
import { ICustomInputProps } from '../../../interfaces/Input/ICustomInputProps';
import InputLabel from './InputLabel';

export default function ImageInput({
  placeholder,
  name,
  label,
  subscript,
  limit,
  width,
  onChange,
}: ICustomInputProps) {
  return (
    <div className="flex flex-col" style={{width: width}}>
      {label && <InputLabel label={label} />}
      <input
        name={name}
        placeholder={placeholder}
        type="file"
        accept='image/*'
        className="p-4 rounded-xl border border-solid border-gray_text_inactive focus:outline-gray_caption"
        onChange={onChange}
      />
      {subscript && <span className="mt-2 text-gray_caption">{subscript}</span>}
    </div>
  );
}
