import React, { useState } from 'react';
import Header from '../Header/Header';
import { usePage } from '../../hooks/Page/usePage';
import OurTeamService from '../../services/OurTeam/OurTeamService';
import { ChangesStatus } from '../../enums/ChangesStatus';
import OurTeamHeader from './OurTeamHeader';
import OurTeamDnd from './OurTeamDnd';
import BlueButton from '../Button/BlueButton';
import NewMemberForm from './NewMemberForm';
import ClosableWindow from '../ClosableWindow/ClosableWindow';
import { ITeamMember } from '../../interfaces/OurTeam/models/ITeamMember';

export default function OurTeam() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const {
    items: members,
    status,
    addNewItem: addNewMember,
    deleteItem: deleteMember,
    onDragEnd,
    publishChanges,
  } = usePage(new OurTeamService());

  return (
    <>
      <Header
        title={'Наша команда'}
        status={status || ChangesStatus.NONE}
        onUpload={publishChanges}
      />
      <OurTeamHeader />
      <OurTeamDnd
        items={members}
        droppableId="OurTeam"
        onDragEnd={onDragEnd}
        onDelete={deleteMember}
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
              addNewMember(member);
              setIsVisible(false);
            }}
          />
        </ClosableWindow>
      )}
    </>
  );
}
