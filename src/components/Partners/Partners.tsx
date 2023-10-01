import React from 'react';
import Header from '../Header/Header';
import PartnersHeader from './PartnersHeader';
import PartnersDnd from './PartnersDnd';
import AddPartnerForm from './AddPartnerForm';
import { usePage } from '../../hooks/Page/usePage';
import PartnersService from '../../services/Partners/PartnersService';
import { ChangesStatus } from '../../interfaces/enums/ChangesStatus';

export default function Partners() {
  const {
    items: partners,
    status,
    addNewItem: addNewPartner,
    deleteItem: deletePartner,
    onDragEnd,
    publishChanges,
  } = usePage(new PartnersService());
  return (
    <>
      <Header
        title={'С нами сотрудничали'}
        status={status || ChangesStatus.NONE}
        onUpload={publishChanges}
      />
      <PartnersHeader />
      <PartnersDnd
        items={partners}
        droppableId={'Partners'}
        onDelete={deletePartner}
        onDragEnd={onDragEnd}
      />
      <AddPartnerForm onSubmit={addNewPartner} />
    </>
  );
}
