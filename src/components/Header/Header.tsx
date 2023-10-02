import React from 'react';
import UploadButton from '../Button/UploadButton';
import PreviewButton from '../Button/PreviewButton';
import { IHeaderProps } from '../../interfaces/Header/IHeaderProps';
import { ChangesStatus } from '../../enums/ChangesStatus';
import Status from './Status';

export default function Header({ title, status, onUpload }: IHeaderProps) {
  return (
    <header className="w-full flex items-center p-10 border-b border-gray_button_inactive">
      <h1 className="font-semibold text-4xl">{title}</h1>
      <Status status={status || ChangesStatus.NONE} />
      <UploadButton onClick={() => onUpload && onUpload()} />
      <PreviewButton />
    </header>
  );
}
