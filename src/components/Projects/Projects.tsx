import React, { useState } from 'react';
import Header from '../Header/Header';
import ProjectsDnd from './DragAndDrop/ProjectsDnd';
import BlueButton from '../Button/BlueButton';
import { useProjects } from '../../hooks/Projects/useProjects';
import ProjectsHeader from './ProjectsHeader';
import ClosableWindow from '../ClosableWindow/ClosableWindow';
import NewProjectForm from './NewProject/NewProjectForm';

export default function Projects() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const { 
    projects,
    newProjects,
    deletedProjects,
    addNewProject,
    deleteProject,
    onDragEnd
  } = useProjects();
  
  return (
    <>
      <Header title={'Реализованные проекты'} />
      <ProjectsHeader />
      <ProjectsDnd
        onDragEnd={onDragEnd}
        items={projects}
        droppableId={'Projects'}
        onDelete={deleteProject}
      />
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
          <NewProjectForm onSubmit={(project) => {
            console.log(project);
            addNewProject(project);
            setIsVisible(false);
          }} />
        </ClosableWindow>
      )}
    </>
  );
}
