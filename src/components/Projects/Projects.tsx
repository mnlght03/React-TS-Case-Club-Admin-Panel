import React, { useState } from 'react';
import Header from '../Header/Header';
import ProjectsDnd from './DragAndDrop/ProjectsDnd';
import BlueButton from '../Button/BlueButton';
import ProjectsHeader from './ProjectsHeader';
import ClosableWindow from '../ClosableWindow/ClosableWindow';
import NewProjectForm from './NewProject/NewProjectForm';
import { ChangesStatus } from '../../enums/ChangesStatus';
import { usePage } from '../../hooks/Page/usePage';
import { IProject } from '../../interfaces/Projects/models/IProject';
import ProjectsService from '../../services/Projects/ProjectsService';

export default function Projects() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const {
    items: projects,
    status,
    addNewItem: addNewProject,
    deleteItem: deleteProject,
    onDragEnd,
    publishChanges,
  } = usePage<IProject>(new ProjectsService());

  return (
    <>
      <Header
        title={'Реализованные проекты'}
        status={status || ChangesStatus.NONE}
        onUpload={publishChanges}
      />
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
          <NewProjectForm
            onSubmit={(project) => {
              console.log(project);
              addNewProject(project);
              setIsVisible(false);
            }}
          />
        </ClosableWindow>
      )}
    </>
  );
}
