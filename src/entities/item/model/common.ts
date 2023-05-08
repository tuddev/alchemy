import { type TItem } from 'src/shared';

export const getItemsNamesWithSlash = (items: TItem[]) => {
  return items
    .map((item) => item.name)
    .sort()
    .join('/');
};
