export function useOnDragEnd(items, setItems) {
  return (result: any) => {
    if (!result.destination) {
      return;
    }

    const startIdx = result.source.index;
    const endIdx = result.destination.index;
    const movedItem = items[startIdx];

    items.splice(startIdx, 1);
    items.splice(endIdx, 0, movedItem);

    setItems([...items]);
  };
}