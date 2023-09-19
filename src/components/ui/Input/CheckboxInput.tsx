import React, { useRef, useState } from 'react';
import { ICustomInputProps } from '../../../interfaces/Input/ICustomInputProps';

import { ReactComponent as IconChecked } from '../../../assets/icons/icon-checked.svg';
import { ReactComponent as IconUnchecked } from '../../../assets/icons/icon-unchecked.svg';

export default function FileInput({
  placeholder,
  name,
  label,
  subscript,
  width,
  onChange,
}: ICustomInputProps) {
  const [isChecked, setIsChecked] = useState(false);
  
  return (
    <div
      className="flex flex-col"
      style={{ width: width }}
    >
      {label && <label className="mb-4 font-semibold text-lg">{label}</label>}
      <div onClick={() => setIsChecked(!isChecked)} className='py-4'>
        {isChecked ? <IconChecked /> : <IconUnchecked />}
        <input type="checkbox" checked={isChecked} hidden />
      </div>
      {subscript && <span className="mt-2 text-gray_caption">{subscript}</span>}
    </div>
  );
}
