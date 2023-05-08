import uuid from 'uuidv4';
import { getItemsNamesWithSlash } from './common';
import { type TItem } from 'src/shared';

export const createItemObject = (name: string, imgSrc: string): TItem => {
  return {
    id: uuid(),
    name,
    imgSrc,
  };
};

const WormObject = createItemObject(
  'Worm',
  'https://www.pngmart.com/files/6/Worms-PNG-Picture.png'
);
const WindObject = createItemObject(
  'Wind',
  'https://avatanplus.com/files/resources/original/5a06f2c0c961a15fab244139.png'
);
const LifeObject = createItemObject(
  'Life',
  'https://www.pngall.com/wp-content/uploads/1/Life-PNG-Image.png'
);
const SwampObject = createItemObject(
  'Swamp',
  'https://img.freepik.com/free-vector/moss-on-stone-in-marsh-cartoon-rock-in-swamp-jungle_105738-1326.jpg'
);
const Green = createItemObject(
  'Green',
  'https://pngicon.ru/file/uploads/trava.png'
);
const Earth = createItemObject(
  'Earth',
  'https://static.wikia.nocookie.net/minecraft_ru_gamepedia/images/9/91/%D0%9A%D0%B0%D0%BC%D0%B5%D0%BD%D0%B8%D1%81%D1%82%D0%B0%D1%8F_%D0%B7%D0%B5%D0%BC%D0%BB%D1%8F.png'
);
const Butterfly = createItemObject(
  'Butterfly',
  'https://www.pngall.com/wp-content/uploads/7/Monarch-Butterfly-PNG-Clipart.png'
);
const Bactery = createItemObject(
  'Bactery',
  'https://cdn-icons-png.flaticon.com/512/3254/3254045.png'
);
const Bamboo = createItemObject(
  'Bamboo',
  'https://www.pngplay.com/wp-content/uploads/2/Bamboo-Free-PNG.png'
);
const Fruit = createItemObject(
  'Fruit',
  'https://pngimg.com/uploads/apricot/small/apricot_PNG12656.png'
);
const Banana = createItemObject(
  'Banana',
  'https://free-png.ru/wp-content/uploads/2022/02/free-png.ru-90.png'
);
const Pig = createItemObject(
  'Pig',
  'https://free-png.ru/wp-content/uploads/2021/05/free-png.ru-406.png'
);
const Fire = createItemObject(
  'Fire',
  'https://free-png.ru/wp-content/uploads/2021/11/free-png.ru-46.png'
);
const Bacon = createItemObject(
  'Bacon',
  'https://free-png.ru/wp-content/uploads/2021/02/bekon-f0f7d391.png'
);

export const UNIC_ITEM_OBJECTS = [
  WormObject,
  WindObject,
  LifeObject,
  SwampObject,
  Green,
  Earth,
  Butterfly,
  Bactery,
  Bamboo,
  Fruit,
  Banana,
  Pig,
  Fire,
  Bacon,
];

export const INIT_ITEM_OBJECTS: TItem[] = [
  WormObject,
  WindObject,
  LifeObject,
  SwampObject,
];

const createMatchObject = (
  partsItems: TItem[],
  createdItem: TItem
): Record<string, TItem> => {
  const names = getItemsNamesWithSlash(partsItems);

  return {
    [names]: createdItem,
  };
};

export const MATCHES: Record<string, TItem> = {
  ...createMatchObject([WindObject, WormObject], Butterfly),
  ...createMatchObject([LifeObject, SwampObject], Bactery),
  ...createMatchObject([Green, Earth], Bamboo),
  ...createMatchObject([Green, Fruit], Banana),
  ...createMatchObject([Pig, Fire], Bacon),
};

// export const MATCHES: Record<string, TItem> = {
//   ["воздух/Червь"]: {
//     id: uuid(),
//     name: "Бабочка",
//     imgSrc:
//       "https://www.pngall.com/wp-content/uploads/7/Monarch-Butterfly-PNG-Clipart.png",
//     isSelected: false,
//   },
//   ["Жизнь/Болото"]: {
//     id: uuid(),
//     name: "Бактерия",
//     isSelected: false,
//     imgSrc: "https://cdn-icons-png.flaticon.com/512/3254/3254045.png",
//   },
//   ["трава/земля"]: {
//     id: uuid(),
//     name: "Бамбук",
//     isSelected: false,
//     imgSrc: "https://www.pngplay.com/wp-content/uploads/2/Bamboo-Free-PNG.png",
//   },
//   ["трава/фрукт"]: {
//     id: uuid(),
//     name: "Банан",
//     isSelected: false,
//     imgSrc: "https://free-png.ru/wp-content/uploads/2022/02/free-png.ru-90.png",
//   },
//   ["свинья/огонь"]: {
//     id: uuid(),
//     name: "Бекон",
//     isSelected: false,
//     imgSrc: "https://free-png.ru/wp-content/uploads/2021/02/bekon-f0f7d391.png",
//   },
// };
