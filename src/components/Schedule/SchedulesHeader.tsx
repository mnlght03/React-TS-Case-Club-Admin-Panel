import React from 'react';

export default function SchedulesHeader() {
  return (
    <div className="ml-24 py-12 flex">
      <div className="w-96 font-semibold">Название мероприятия</div>
      <div className="w-64 font-semibold ml-32">Даты проведения</div>
      <div className="w-44 font-semibold ml-32">Ссылка на мероприятие</div>
    </div>
  );
}
