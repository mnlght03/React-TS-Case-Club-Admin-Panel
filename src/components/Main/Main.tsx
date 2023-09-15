import React from "react";

interface IMainProps {
  children: any;
}

export default function Main({children}: IMainProps) {
  return (
    <main className="w-full">
      {children}
    </main>
  );
}
