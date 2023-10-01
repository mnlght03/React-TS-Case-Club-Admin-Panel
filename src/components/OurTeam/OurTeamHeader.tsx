import React from "react";

export default function OurTeamHeader() {
  return (
    <div className="ml-24 py-12 flex">
      <div className="w-96 font-semibold">Имя и фамилия</div>
      <div className="w-64 font-semibold ml-32">Ник в телеграмм</div>
      <div className="w-44 font-semibold ml-32">Роль</div>
      <div className="w-44 font-semibold ml-32">Цвет роли</div>
    </div>
  );
}
