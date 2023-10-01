import React, { useEffect, useState } from 'react';
import { ReactComponent as IconChecked } from '../../../assets/icons/icon-checked.svg';
import { ReactComponent as IconUnchecked } from '../../../assets/icons/icon-unchecked.svg';
import { ICheckboxInputProps } from '../../../interfaces/Input/ICheckboxInputProps';
import InputLabel from './InputLabel';

export default function CheckboxInput({
  label,
  subscript,
  width,
  checked,
  onChange,
}: ICheckboxInputProps) {
  const [isChecked, setCheckedState] = useState(checked);

  useEffect(() => {
    setCheckedState(checked);
  }, [checked]);

  const setIsChecked = (value: boolean) => {
    setCheckedState(value);
    onChange && onChange(value);
  };

  return (
    <div
      className="flex flex-col"
      style={{ width: width }}
    >
      {label && <InputLabel label={label} />}
      <div
        onClick={() => setIsChecked(!isChecked)}
        className="py-4 cursor-pointer w-fit"
      >
        {isChecked ? <IconChecked /> : <IconUnchecked />}
        <input
          type="checkbox"
          checked={isChecked}
          hidden
        />
      </div>
      {subscript && <span className="mt-2 text-gray_caption">{subscript}</span>}
    </div>
  );
}
