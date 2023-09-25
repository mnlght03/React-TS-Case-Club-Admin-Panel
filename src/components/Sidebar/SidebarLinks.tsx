import React from 'react';
import SidebarLink from './SidebarLink';

export default function SidebarLinks() {
  return (
    <nav className="mt-9 flex flex-col">
      <SidebarLink
        title={'Релизованные проекты'}
        to={'/'}
      />
      <SidebarLink
        title={'С нами сотрудничали'}
        to={'/partners'}
      />
      <SidebarLink
        title={'Текущие проекты'}
        to={'/current-projects'}
      />
      <SidebarLink
        title={'Расписание мероприятий'}
        to={'/schedule'}
      />
      <SidebarLink
        title={'Истории успеха'}
        to={'/success-stories'}
      />
      <SidebarLink
        title={'Наша команда'}
        to={'/our-team'}
      />
      <SidebarLink
        title={'Мероприятия / Галерея'}
        to={'/gallery'}
      />
      <SidebarLink
        title={'FAQ'}
        to={'/faq'}
      />
      <SidebarLink
        title={'Обратная связь'}
        to={'/feedback'}
      />
    </nav>
  );
}
