import React from "react";
import { IInputLabelProps } from "../../../interfaces/Input/IInputLabelProps";

export default function InputLabel({label}: IInputLabelProps) {
  return <label className="mb-4 font-semibold text-lg block">{label}</label>;
}
