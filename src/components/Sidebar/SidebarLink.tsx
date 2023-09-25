import React from 'react';
import { NavLink } from 'react-router-dom';
import { ISidebarLinkProps } from '../../interfaces/Sidebar/ISidebarLinkProps';

export default function SidebarLink({ title, to }: ISidebarLinkProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? 'p-3 w-full text-white mt-4 rounded-lg font-semibold bg-gray_menu_selected'
          : 'p-3 w-full text-white mt-4 rounded-lg font-semibold'
      }
    >
      {title}
    </NavLink>
  );
}
