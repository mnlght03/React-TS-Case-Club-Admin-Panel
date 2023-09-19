import React from "react";
import CloseableHeader from "../Header/ClosableHeader";
import { IClosableWindowProps } from "../../interfaces/ClosableWindow/IClosableWindowProps";

export default function ClosableWindow({title, onClose, children}: IClosableWindowProps) {
  return (
    <div className="absolute bottom-0 left-0 right-0 top-0 bg-white">
      <CloseableHeader title={title} onClose={onClose}/>
      { children }
    </div>
  );
}
