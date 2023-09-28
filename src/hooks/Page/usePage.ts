import { useEffect, useState } from 'react';
import { useOnDragEnd } from '../DragAndDrop/useOnDragEnd';
import { useChangesStatus } from '../ChangesStatus/useChangesStatus';
import { IService } from '../../interfaces/Service/IService';

export function usePage<T extends { id: number }>(service: IService<T>) {
  const [items, setItems] = useState<T[]>([]);

  const fetchItems = async () => {
    const data = await service.fetchAll();
    setItems(data);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const [newItems, setNewItems] = useState<T[]>([]);
  const [deletedItems, setDeletedItems] = useState<T[]>([]);

  const addNewItem = (partner: T) => {
    setNewItems([...newItems, partner]);
    setItems([...items, partner]);
  };

  const deleteItem = (partner: T) => {
    if (!newItems.includes(partner)) setDeletedItems([...deletedItems, partner]);
    setNewItems(newItems.filter((p) => p.id !== partner.id));
    setItems(items.filter((p) => p.id !== partner.id));
  };

  const onDragEnd = useOnDragEnd(items, setItems);

  const publishChanges = async () => {
    await service.uploadAll(newItems);
    await service.deleteAll(deletedItems);
  };

  const { status } = useChangesStatus(newItems, deletedItems);

  return {
    items,
    newItems,
    deletedItems,
    status,
    addNewItem,
    deleteItem,
    onDragEnd,
    publishChanges,
  };
}
