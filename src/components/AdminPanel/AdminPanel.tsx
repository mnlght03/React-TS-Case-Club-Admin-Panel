import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Projects from '../Projects/Projects';

export default function AdminPanel() {
  return (
    <div className="flex w-screen h-screen">
      <Sidebar />
      <Projects />
    </div>
  );
}
