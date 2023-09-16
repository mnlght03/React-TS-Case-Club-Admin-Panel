import React from "react";
import UploadButton from "../Button/UploadButton";
import PreviewButton from "../Button/PreviewButton";
import { IHeaderProps } from "../../interfaces/Header/IHeaderProps";

export default function Header({title}: IHeaderProps) {
  return (
    <header className="w-full flex items-center p-10 border-b border-gray_button_inactive">
      <h1 className="font-semibold text-4xl">{title}</h1>
      <UploadButton />
      <PreviewButton />
    </header>
  );
}
