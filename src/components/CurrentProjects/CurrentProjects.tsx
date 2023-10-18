import React, {useContext, useState} from 'react';
import Header from '../ui/Header/Header';
import {ChangesStatus} from '../../enums/ChangesStatus';
import BlueButton from '../ui/Button/BlueButton';
import ClosableWindow from '../ui/ClosableWindow/ClosableWindow';
import NewCurrentProjectForm from './NewCurrentProjectForm';
import CurrentProjectsHeader from './CurrentProjectsHeader';
import CurrentProjectsDnd from './CurrentProjectsDnd';
import {
    ICurrentProject
} from '../../interfaces/CurrentProjects/ICurrentProject';
import {GlobalContext} from "../../store";

export default function CurrentProjects() {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const {currentProjects} = useContext(GlobalContext);

    return (
        <>
            <Header
                title={'Текущие проекты'}
                status={currentProjects.status || ChangesStatus.NONE}
                onUpload={currentProjects.publishChanges}
            />
            <CurrentProjectsHeader/>
            <CurrentProjectsDnd
                onDragEnd={currentProjects.onDragEnd}
                items={currentProjects.items}
                droppableId={'CurrentProjects'}
                onDelete={currentProjects.deleteItem}
            />
            <BlueButton
                onClick={() => setIsVisible(true)}
                text={'Добавить'}
                classes="ml-10 mt-6"
            />
            {isVisible && (
                <ClosableWindow
                    onClose={() => setIsVisible(false)}
                    title={'Новый текущий проект'}
                >
                    <NewCurrentProjectForm
                        onSubmit={(project: ICurrentProject) => {
                            console.log(project);
                            currentProjects.addNewItem(project);
                            setIsVisible(false);
                        }}
                    />
                </ClosableWindow>
            )}
        </>
    );
}
