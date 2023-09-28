import React from 'react';

export default function CurrentProjectsHeader() {
  return (
    <div className="ml-24 py-12 flex">
      <div className="w-96 font-semibold">Название проекта</div>
      <div className="w-64 font-semibold ml-32">Описание проекта</div>
      <div className="w-44 font-semibold ml-32">Презентация</div>
    </div>
  );
}
