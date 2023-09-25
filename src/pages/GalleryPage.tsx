import React from 'react';
import AdminPanelLayout from '../layouts/AdminPanelLayout';
import Gallery from '../components/Gallery/Gallery';

export default function GalleryPage() {
  return <AdminPanelLayout component={<Gallery />} />;
}
