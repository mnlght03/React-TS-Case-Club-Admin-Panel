import React from "react";

interface IProps {
  children: React.ReactNode
}

export default function FormInputRow({children}: IProps) {
  return <div className="flex gap-8 p-10 border-t border-t-solid border-gray_button_inactive">{children}</div>;
}
