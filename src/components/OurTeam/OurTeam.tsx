import React, {useContext, useState} from 'react';
import Header from '../ui/Header/Header';
import {ChangesStatus} from '../../enums/ChangesStatus';
import OurTeamHeader from './OurTeamHeader';
import OurTeamDnd from './OurTeamDnd';
import BlueButton from '../ui/Button/BlueButton';
import NewMemberForm from './NewMemberForm';
import ClosableWindow from '../ui/ClosableWindow/ClosableWindow';
import {ITeamMember} from '../../interfaces/OurTeam/models/ITeamMember';
import {GlobalContext} from "../../store";

export default function OurTeam() {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const {ourTeam} = useContext(GlobalContext);

    return (
        <>
            <Header
                title={'Наша команда'}
                status={ourTeam.status || ChangesStatus.NONE}
                onUpload={ourTeam.publishChanges}
            />
            <OurTeamHeader/>
            <OurTeamDnd
                items={ourTeam.items}
                droppableId="OurTeam"
                onDragEnd={ourTeam.onDragEnd}
                onDelete={ourTeam.deleteItem}
            />
            <BlueButton
                onClick={() => setIsVisible(true)}
                text={'Добавить'}
                classes="ml-10 mt-6"
            />
            {isVisible && (
                <ClosableWindow
                    onClose={() => setIsVisible(false)}
                    title={'Новый участник комадны'}
                >
                    <NewMemberForm
                        onSubmit={(member: ITeamMember) => {
                            console.log(member);
                            ourTeam.addNewItem(member);
                            setIsVisible(false);
                        }}
                    />
                </ClosableWindow>
            )}
        </>
    );
}
