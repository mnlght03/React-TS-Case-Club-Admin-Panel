import React from 'react';
import Sidebar from '../components/ui/Sidebar/Sidebar';
import Main from '../components/ui/Main/Main';
import { ILayoutProps } from '../interfaces/layout';

export default function AdminPanelLayout({component}: ILayoutProps) {
  return (
    <div className="flex w-screen h-screen">
      <Sidebar />
      <Main>
        {component}
      </Main>
    </div>
  );
}
