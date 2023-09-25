import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Main from '../components/Main/Main';
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
