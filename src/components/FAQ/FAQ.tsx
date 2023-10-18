import React, {useContext} from 'react';
import Header from '../ui/Header/Header';
import {ChangesStatus} from '../../enums/ChangesStatus';
import FAQHeader from './FAQHeader';
import FAQDnd from './FAQDnd';
import AddFaqForm from './AddFaqForm';
import {GlobalContext} from "../../store";

export default function FAQ() {
    const {faq} = useContext(GlobalContext);

    return (
        <>
            <Header
                title={'FAQ'}
                status={faq.status || ChangesStatus.NONE}
                onUpload={faq.publishChanges}
            />
            <FAQHeader/>
            <FAQDnd
                items={faq.items}
                droppableId={'FAQ'}
                onDragEnd={faq.onDragEnd}
                onDelete={faq.deleteItem}
            />
            <AddFaqForm onSubmit={faq.addNewItem}/>
        </>
    );
}
