import { atom } from 'nanostores';
import { INIT_ITEM_OBJECTS, MATCHES } from './itemObjects';
import { type TMovedItem, type TItem } from 'src/shared';
import { getItemsNamesWithSlash } from './common';

export const unicItems$ = atom<TItem[]>(INIT_ITEM_OBJECTS);

export const itemsOnBoard$ = atom<TItem[]>(
  INIT_ITEM_OBJECTS.map((item) => ({ ...item, isSelected: false }))
);

itemsOnBoard$.listen((items) => {
  if (!items.length) return;

  const localItems = [...items];
  tryCreateNewItem(localItems);
});

export const tryCreateNewItem = (currentItems: TItem[]) => {
  const newItem = tryCreateObjectFromCurrentItems(currentItems);

  if (newItem) {
    const itemsSet = new Set([...unicItems$.get(), newItem]);
    unicItems$.set([...itemsSet]);

    let restItems: TItem[] = [];

    for (const curItem of currentItems) {
      restItems = itemsOnBoard$.get().filter((item) => item.id !== curItem.id);
    }

    itemsOnBoard$.set([...restItems, newItem]);
  }
};

export const tryCreateObjectFromCurrentItems = (currentItems: TItem[]) => {
  return MATCHES[getItemsNamesWithSlash(currentItems)];
};

export const isCollide = (aRect: TMovedItem, bRect: TMovedItem) => {
  return (
    aRect.left < bRect.left + bRect.width &&
    aRect.left + aRect.width > bRect.left &&
    aRect.top < bRect.top + bRect.height &&
    aRect.height + aRect.top > bRect.top
  );
};
