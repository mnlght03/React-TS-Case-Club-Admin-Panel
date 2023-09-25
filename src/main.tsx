import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ProjectsPage from './pages/ProjectsPage.tsx';
import PartnersPage from './pages/PartnersPage.tsx';
import CurrentProjectsPage from './pages/CurrentProjectsPage.tsx';
import SchedulePage from './pages/SchedulePage.tsx';
import SuccessStoriesPage from './pages/SuccessStoriesPage.tsx';
import OurTeamPage from './pages/OurTeamPage.tsx';
import GalleryPage from './pages/GalleryPage.tsx';
import FAQPage from './pages/FAQPage.tsx';
import FeedbackPage from './pages/FeedbackPage.tsx';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ProjectsPage />,
  },
  {
    path: '/partners',
    element: <PartnersPage />,
  },
  {
    path: '/current-projects',
    element: <CurrentProjectsPage />,
  },
  {
    path: '/schedule',
    element: <SchedulePage />,
  },
  {
    path: '/success-stories',
    element: <SuccessStoriesPage />,
  },
  {
    path: '/our-team',
    element: <OurTeamPage />,
  },
  {
    path: '/gallery',
    element: <GalleryPage />,
  },
  {
    path: '/faq',
    element: <FAQPage />,
  },
  {
    path: '/feedback',
    element: <FeedbackPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);
