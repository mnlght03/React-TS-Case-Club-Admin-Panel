import React, { useState } from 'react';
import Header from '../Header/Header';
import CurrentProjectsService from '../../services/CurrentProjects/CurrentProjectsService';
import { usePage } from '../../hooks/Page/usePage';
import { ChangesStatus } from '../../enums/ChangesStatus';
import BlueButton from '../Button/BlueButton';
import ClosableWindow from '../ClosableWindow/ClosableWindow';
import NewCurrentProjectForm from './NewCurrentProjectForm';
import CurrentProjectsHeader from './CurrentProjectsHeader';
import CurrentProjectsDnd from './CurrentProjectsDnd';

export default function CurrentProjects() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const {
    items: projects,
    status,
    addNewItem: addNewProject,
    deleteItem: deleteProject,
    onDragEnd,
    publishChanges,
  } = usePage(new CurrentProjectsService());

  return (
    <>
      <Header
        title={'Текущие проекты'}
        status={status || ChangesStatus.NONE}
        onUpload={publishChanges}
      />
      <CurrentProjectsHeader />
      <CurrentProjectsDnd
        onDragEnd={onDragEnd}
        items={projects}
        droppableId={'CurrentProjects'}
        onDelete={deleteProject}
      />
      <BlueButton
        onClick={() => setIsVisible(true)}
        text={'Добавить'}
        classes="ml-10 mt-6"
      />
      {/* {isVisible && (
        <ClosableWindow
          onClose={() => setIsVisible(false)}
          title={'Новый текущий проект'}
        >
          <NewCurrentProjectForm
            onSubmit={(project) => {
              console.log(project);
              addNewProject(project);
              setIsVisible(false);
            }}
          />
        </ClosableWindow>
      )} */}
    </>
  );
}
