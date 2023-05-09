import { atom } from 'nanostores';
import { INIT_ITEM_OBJECTS, MATCHES } from './itemObjects';
import { type TItem } from 'src/shared';
import { getItemsNamesWithSlash } from './common';

export const unicItems$ = atom<TItem[]>(INIT_ITEM_OBJECTS);

export const movedItems$ = atom<{
  items: TItem[];
  last: TItem | null;
}>({
  items: INIT_ITEM_OBJECTS,
  last: null,
});

movedItems$.listen(() => {
  const { items, last } = movedItems$.get();
  if (!last) return;

  const collided: TItem[] = [];

  for (const item of items) {
    if (isCollide(last, item)) {
      const movedItem = unicItems$
        .get()
        .find((unicItem) => unicItem.id === item.id);

      if (movedItem) {
        collided.push(movedItem);
      }
    }
  }

  const lastItem = unicItems$.get().find((unicItem) => unicItem.id === last.id);
  console.log(collided);
  if (lastItem) {
    collided.push(lastItem);
  }

  tryCreateNewItem(collided);
});

export const tryCreateNewItem = (currentItems: TItem[]) => {
  const newItem = tryCreateObjectFromCurrentItems(currentItems);
  if (newItem) {
    const itemsSet = new Set([...unicItems$.get(), ...newItem]);
    unicItems$.set([...itemsSet]);

    let restItems: TItem[] = movedItems$.get().items;

    for (const curItem of currentItems) {
      restItems = restItems.filter((item) => item.id !== curItem.id);
    }

    movedItems$.set({
      items: [...restItems, ...newItem],
      last: movedItems$.get().last,
    });
  }
};

export const tryCreateObjectFromCurrentItems = (currentItems: TItem[]) => {
  return MATCHES[getItemsNamesWithSlash(currentItems)];
};

export const isCollide = (aRect: TItem, bRect: TItem) => {
  return (
    aRect.left < bRect.left + 64 &&
    aRect.left + 64 > bRect.left &&
    aRect.top < bRect.top + 64 &&
    64 + aRect.top > bRect.top
  );
};
