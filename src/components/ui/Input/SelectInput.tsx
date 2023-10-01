import React from 'react';
import { ISelectInputProps } from '../../../interfaces/Input/ISelectInputProps';
import InputLabel from './InputLabel';

export default function SelectInput({
  name,
  options,
  label,
  subscript,
  width,
  onChange,
}: ISelectInputProps) {
  return (
    <div
      className="flex flex-col"
      style={{ width: width }}
    >
      {label && <InputLabel label={label} />}
      <select
        name={name}
        className="p-4 border border-solid border-gray_text_inactive focus:outline-gray_caption rounded-xl"
        onChange={onChange}
      >
        {options.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>
      {subscript && <span className="mt-2 text-gray_caption">{subscript}</span>}
    </div>
  );
}
