import React from 'react';

interface ISidebarLinkProps {
  title: string;
  href: string;
  isActive: boolean;
}

export default function SidebarLink({ title, href, isActive }: ISidebarLinkProps) {
  return (
    <a
      href={href}
      className={`p-3 w-full text-white mt-4 rounded-lg font-semibold ${
        isActive ? 'bg-gray_menu_selected' : ''
      }`}
    >
      {title}
    </a>
  );
}
