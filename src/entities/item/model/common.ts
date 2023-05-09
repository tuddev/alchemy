import { type TItem } from 'src/shared';

export const getItemsNamesWithSlash = (items: TItem[]) => {
  return items
    .map((item) => item.name)
    .sort()
    .join('/');
};

export const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};
