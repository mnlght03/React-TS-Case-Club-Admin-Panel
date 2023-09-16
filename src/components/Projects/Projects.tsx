import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import ProjectsDnd from './DragAndDrop/ProjectsDnd';
import BlueButton from '../Button/BlueButton';
import { useProjects } from '../../hooks/Projects/useProjects';
import ProjectsHeader from './ProjectsHeader';
import NewProjectWindow from '../ClosableWindow/ClosableWindow';

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const { projects, setProjects, fetchProjects } = useProjects();

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <Main>
      <Header title={'Реализованные проекты'} />
      <ProjectsHeader />
      <ProjectsDnd items={projects} />
      <BlueButton
        onClick={() => setIsVisible(true)}
        text={'Добавить'}
        classes="ml-10 mt-6"
      />
      {isVisible && <NewProjectWindow onClose={() => setIsVisible(false)} title={'Новый реализованный проект'}/>}
    </Main>
  );
}
