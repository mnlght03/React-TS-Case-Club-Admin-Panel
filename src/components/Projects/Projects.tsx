import React, {useContext, useState} from 'react';
import Header from '../ui/Header/Header';
import ProjectsDnd from './DragAndDrop/ProjectsDnd';
import BlueButton from '../ui/Button/BlueButton';
import ProjectsHeader from './ProjectsHeader';
import ClosableWindow from '../ui/ClosableWindow/ClosableWindow';
import NewProjectForm from './NewProject/NewProjectForm';
import {ChangesStatus} from '../../enums/ChangesStatus';
import {GlobalContext} from "../../store";

export default function Projects() {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const {projects} = useContext(GlobalContext);

    return (
        <>
            <Header
                title={'Реализованные проекты'}
                status={projects.status || ChangesStatus.NONE}
                onUpload={projects.publishChanges}
            />
            <ProjectsHeader/>
            <ProjectsDnd
                onDragEnd={projects.onDragEnd}
                items={projects.items}
                droppableId={'Projects'}
                onDelete={projects.deleteItem}
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
                            projects.addNewItem(project);
                            setIsVisible(false);
                        }}
                    />
                </ClosableWindow>
            )}
        </>
    );
}
