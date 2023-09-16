import React from 'react';

export default function ProjectsHeader() {
  return (
    <div className="ml-24 py-12 flex">
      <div className="w-96 font-semibold">Название проекта</div>
      <div className="w-64 font-semibold ml-32">Проект последнего года?</div>
      <div className="w-44 font-semibold ml-32">Логотип компании</div>
    </div>
  );
}
