import React from 'react';
import { ICustomInputProps } from '../../../interfaces/Input/ICustomInputProps';
import InputLabel from './InputLabel';

export default function TextAreaInput({
  placeholder,
  name,
  label,
  subscript,
  limit,
  width,
  required,
  onChange,
}: ICustomInputProps) {
  const onChangeFn = (e) => {
    const text = e.target.value.substring(0, limit);
    e.target.value = text;
    onChange && onChange(text);
  };

  return (
    <div
      className="flex flex-col"
      style={{ width: width }}
    >
      {label && <InputLabel label={label} />}
      <textarea
        name={name}
        placeholder={placeholder}
        className="h-32 p-4 rounded-xl border border-solid border-gray_text_inactive focus:outline-gray_caption"
        onChange={onChangeFn}
        required={required}
      />
      {subscript && <span className="mt-2 text-gray_caption">{subscript}</span>}
    </div>
  );
}
