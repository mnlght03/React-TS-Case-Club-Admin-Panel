import React from "react";
import SidebarLink from "./SidebarLink";


export default function SidebarLinks() {
  return (
    <nav className="mt-9 flex flex-col">
      <SidebarLink title={'Релизованные проекты'} href={'#'} isActive={true} />
      <SidebarLink title={'С нами сотрудничали'} href={'#'} isActive={false} />
      <SidebarLink title={'Текущие проекты'} href={'#'} isActive={false} />
      <SidebarLink title={'Расписание мероприятий'} href={'#'} isActive={false} />
      <SidebarLink title={'Истории успеха'} href={'#'} isActive={false} />
      <SidebarLink title={'Наша команда'} href={'#'} isActive={false} />
      <SidebarLink title={'Мероприятия / Галерея'} href={'#'} isActive={false} />
      <SidebarLink title={'FAQ'} href={'#'} isActive={false} />
      <SidebarLink title={'Обратная связь'} href={'#'} isActive={false} />
    </nav>
  );
}
