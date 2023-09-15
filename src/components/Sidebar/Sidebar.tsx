import React from 'react';

import ImgLogo from '../../assets/logo-admin.png';
import SidebarLinks from './SidebarLinks';

export default function Sidebar() {
  return (
    <div className="w-80 bg-gray_background px-8 py-9">
      <img
        src={ImgLogo}
        alt="Logo"
        width={185}
        height={56}
      />
      <SidebarLinks />
    </div>
  );
}
