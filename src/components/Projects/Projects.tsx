import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import ProjectsDnd from './DragAndDrop/ProjectsDnd';
import BlueButton from '../Button/BlueButton';
import { useProjects } from '../../hooks/Projects/useProjects';
import ProjectsHeader from './ProjectsHeader';
import ClosableWindow from '../ClosableWindow/ClosableWindow';
import NewProjectForm from './NewProject/NewProjectForm';
import { IProject } from '../../interfaces/Projects/models/IProject';

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const { projects, setProjects, fetchProjects } = useProjects();
  const [newProjects, setNewProjects] = useState<IProject[]>([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const addNewProject = (project: IProject) => {
    setNewProjects([...newProjects, project]);
    setProjects([...projects, ...newProjects]);
    setIsVisible(false);
  };

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
      {isVisible && (
        <ClosableWindow
          onClose={() => setIsVisible(false)}
          title={'Новый реализованный проект'}
        >
          <NewProjectForm onSubmit={addNewProject} />
        </ClosableWindow>
      )}
    </Main>
  );
}
