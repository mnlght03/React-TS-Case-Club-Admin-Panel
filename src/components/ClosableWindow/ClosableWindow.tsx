import React from "react";
import AddNewHeader from "../Header/ClosableHeader";
import { IClosableWindowProps } from "../../interfaces/ClosableWindow/IClosableWindowProps";

export default function ClosableWindow({title, onClose}: IClosableWindowProps) {
  return (
    <div className="absolute bottom-0 left-0 right-0 top-0 bg-white">
      <AddNewHeader title={title} onClose={onClose}/>
    </div>
  );
}
