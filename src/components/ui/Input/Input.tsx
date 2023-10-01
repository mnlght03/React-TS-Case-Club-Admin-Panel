import React from 'react';
import { ICustomInputProps } from '../../../interfaces/Input/ICustomInputProps';

export default function Input({
  placeholder,
  name,
  label,
  subscript,
  limit,
  width,
  type,
  accept,
  required,
  onChange,
}: ICustomInputProps) {
  return (
    <div
      className="flex flex-col"
      style={{ width: width }}
    >
      {label && <label className="mb-4 font-semibold text-lg">{label}</label>}
      <input
        name={name}
        placeholder={placeholder}
        type={type}
        accept={accept}
        className="p-4 rounded-xl border border-solid border-gray_text_inactive focus:outline-gray_caption"
        onChange={onChange}
        required={required}
      />
      {subscript && <span className="mt-2 text-gray_caption">{subscript}</span>}
    </div>
  );
}