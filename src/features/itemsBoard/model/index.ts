import { atom } from 'nanostores';
import { tryCreateNewItem, unicItems$ } from 'src/entities/item';
import { isCollide } from 'src/entities/item/model';
import { type TItem, type TMovedItem } from 'src/shared';

export const movedItems$ = atom<{
  items: TMovedItem[];
  last: TMovedItem | null;
}>({
  items: [],
  last: null,
});

movedItems$.listen(() => {
  const { items, last } = movedItems$.get();
  if (!last) return;

  const collided: TItem[] = [];

  for (const item of items) {
    if (isCollide(last, item) && item.id !== last.id) {
      const movedItem = unicItems$
        .get()
        .find((unicItem) => unicItem.id === item.id);

      if (movedItem) {
        collided.push(movedItem);
      }
    }
  }

  const lastItem = unicItems$.get().find((unicItem) => unicItem.id === last.id);

  if (lastItem) {
    collided.push(lastItem);
  }

  tryCreateNewItem(collided);
});
