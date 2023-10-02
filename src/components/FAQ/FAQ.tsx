import React from 'react';
import Header from '../Header/Header';
import { usePage } from '../../hooks/Page/usePage';
import FAQService from '../../services/FAQ/FAQService';
import { ChangesStatus } from '../../enums/ChangesStatus';
import FAQHeader from './FAQHeader';
import FAQDnd from './FAQDnd';
import AddFaqForm from './AddFaqForm';

export default function FAQ() {
  const { items, status, addNewItem, deleteItem, onDragEnd, publishChanges } = usePage(
    new FAQService()
  );

  return (
    <>
      <Header
        title={'FAQ'}
        status={status || ChangesStatus.NONE}
        onUpload={publishChanges}
      />
      <FAQHeader />
      <FAQDnd
        items={items}
        droppableId={'FAQ'}
        onDragEnd={onDragEnd}
        onDelete={deleteItem}
      />
      <AddFaqForm onSubmit={addNewItem} />
    </>
  );
}
