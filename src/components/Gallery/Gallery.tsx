import React, {useContext, useState} from 'react';
import Header from '../ui/Header/Header';
import {ChangesStatus} from '../../enums/ChangesStatus';
import GalleryHeader from './GalleryHeader';
import GalleryDnd from './GalleryDnd';
import BlueButton from '../ui/Button/BlueButton';
import ClosableWindow from '../ui/ClosableWindow/ClosableWindow';
import NewGalleryEventForm from './NewGalleryEventForm';
import {IGalleryEvent} from '../../interfaces/Gallery/models/IGalleryEvent';
import {GlobalContext} from "../../store";

export default function Gallery() {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const {gallery} = useContext(GlobalContext);

    return (
        <>
            <Header
                title={'Мероприятия / Галерея'}
                status={gallery.status || ChangesStatus.NONE}
                onUpload={gallery.publishChanges}
            />
            <GalleryHeader/>
            <GalleryDnd
                items={gallery.items}
                droppableId={'Gallery'}
                onDragEnd={gallery.onDragEnd}
                onDelete={gallery.deleteItem}
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
                    <NewGalleryEventForm
                        onSubmit={(event: IGalleryEvent) => {
                            console.log(event);
                            gallery.addNewItem(event);
                            setIsVisible(false);
                        }}
                    />
                </ClosableWindow>
            )}
        </>
    );
}
