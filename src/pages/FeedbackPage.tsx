import React from 'react';
import AdminPanelLayout from '../layouts/AdminPanelLayout';
import Feedback from '../components/Feedback/Feedback';

export default function FeedbackPage() {
  return <AdminPanelLayout component={<Feedback />} />;
}
