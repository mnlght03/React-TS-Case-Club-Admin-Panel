import React from "react";
import { IMainProps } from "../../interfaces/Main/IMainProps";

export default function Main({children}: IMainProps) {
  return (
    <main className="w-full relative">
      {children}
    </main>
  );
}
