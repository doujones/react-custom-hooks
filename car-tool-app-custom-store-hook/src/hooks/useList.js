import { useState } from 'react';


export function useList(initialItems) {

  const [ items, setItems ] = useState([ ...initialItems ]);

  const appendItem = (item) => {
    setItems(items.concat({
      ...item,
      id: Math.max(...items.map(i => i.id), 0) + 1,
    }));
  };

  const replaceItem = (item) => {
    const itemIndex = items.findIndex(i => i.id === item.id);
    const newItems = items.concat();
    newItems[itemIndex] = item;
    setItems(newItems);
  };

  const removeItem = (itemId) => {
    setItems(items.filter(i => i.id !== itemId));
  };

  return [ items, appendItem, replaceItem, removeItem];

}