import React, {useContext} from 'react';
import Header from '../ui/Header/Header';
import PartnersHeader from './PartnersHeader';
import PartnersDnd from './PartnersDnd';
import AddPartnerForm from './AddPartnerForm';
import {ChangesStatus} from '../../enums/ChangesStatus';
import {GlobalContext} from "../../store";

export default function Partners() {
    const {partners} = useContext(GlobalContext);

    return (
        <>
            <Header
                title={'С нами сотрудничали'}
                status={partners.status || ChangesStatus.NONE}
                onUpload={partners.publishChanges}
            />
            <PartnersHeader/>
            <PartnersDnd
                items={partners.items}
                droppableId={'Partners'}
                onDelete={partners.deleteItem}
                onDragEnd={partners.onDragEnd}
            />
            <AddPartnerForm onSubmit={partners.addNewItem}/>
        </>
    );
}
