import React from "react";
import { IMainProps } from "../../../interfaces/Main/IMainProps.ts";

export default function Main({children}: IMainProps) {
  return (
    <main className="w-full relative overflow-y-scroll">
      {children}
    </main>
  );
}
