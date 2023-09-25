import React from 'react';
import AdminPanelLayout from '../layouts/AdminPanelLayout';
import SuccessStories from '../components/SuccessStories/SuccessStories';

export default function SuccessStoriesPage() {
  return <AdminPanelLayout component={<SuccessStories />} />;
}
