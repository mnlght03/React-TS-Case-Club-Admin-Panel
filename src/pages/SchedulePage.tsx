import React from 'react';
import AdminPanelLayout from '../layouts/AdminPanelLayout';
import Schedule from '../components/Schedule/Schedule';

export default function SchedulePage() {
  return <AdminPanelLayout component={<Schedule />} />;
}
