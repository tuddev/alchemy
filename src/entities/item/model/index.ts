import { atom } from 'nanostores';
import { INIT_ITEM_OBJECTS, MATCHES } from './itemObjects';
import { type TItem } from 'src/shared';
import { getItemsNamesWithSlash } from './common';

export const unicItems$ =
  atom<Array<Omit<TItem, 'isSelected'>>>(INIT_ITEM_OBJECTS);
export const itemsOnFields$ = atom<TItem[]>(
  INIT_ITEM_OBJECTS.map((item) => ({ ...item, isSelected: false }))
);

itemsOnFields$.listen((items) => {
  if (!items.length) return;

  const localItems = [...items];

  const newItem = tryCreateObjectFromCurrentItems(localItems);

  if (newItem) {
    const itemsSet = new Set([...unicItems$.get(), newItem]);
    unicItems$.set([...itemsSet]);
    itemsOnFields$.set([]);
  }
});

export const tryCreateObjectFromCurrentItems = (currentItems: TItem[]) => {
  return MATCHES[getItemsNamesWithSlash(currentItems)];
};
