import React from 'react';
import { ICustomInputProps } from '../../../interfaces/Input/ICustomInputProps';
import InputLabel from './InputLabel';

export default function TextInput({
  placeholder,
  name,
  label,
  subscript,
  value,
  width,
  limit,
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
      <input
        name={name}
        placeholder={placeholder}
        type="text"
        value={value}
        className="p-4 rounded-xl border border-solid border-gray_text_inactive focus:outline-gray_caption"
        onChange={onChangeFn}
        required={required}
      />
      {subscript && <span className="mt-2 text-gray_caption">{subscript}</span>}
    </div>
  );
}
