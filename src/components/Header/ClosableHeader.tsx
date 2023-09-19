import React from 'react';
import { IHeaderProps } from '../../interfaces/Header/IHeaderProps';
import { ReactComponent as IconClose } from '../../assets/icons/icon-x.svg';

export default function ClosableHeader({ title, onClose }: IHeaderProps) {
  return (
    <header className="w-full flex items-center p-10 border-b border-gray_button_inactive">
      <h1 className="font-semibold text-4xl">{title}</h1>
      <IconClose className="ml-auto cursor-pointer" onClick={onClose}/>
    </header>
  );
}
