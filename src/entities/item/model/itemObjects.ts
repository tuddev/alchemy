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

const SteamObject = createItemObject(
  'Steam',
  'https://coolsen.ru/wp-content/uploads/2022/02/125-20220209_004527-900x506.png'
);
const AirObject = createItemObject(
  'Air',
  'https://cdn-icons-png.flaticon.com/512/4551/4551536.png'
);

const WaterObject = createItemObject(
  'Water',
  'https://imgpng.ru/d/water_PNG50185.png'
);

const WormObject = createItemObject(
  'Worm',
  'https://www.pngmart.com/files/6/Worms-PNG-Picture.png'
);
const WindObject = createItemObject(
  'Wind',
  'https://avatanplus.com/files/resources/original/5a06f2c0c961a15fab244139.png'
);
const EnergyObject = createItemObject(
  'Energy',
  'https://avatanplus.com/files/resources/original/5773ecf71f4fd1559cd5a558.png'
);

const MetallObject = createItemObject(
  'Metall',
  'https://imgpng.ru/d/silver_PNG17160.png'
);

const StoneObject = createItemObject(
  'Stone',
  'https://i.pinimg.com/originals/6e/44/73/6e44737d41239728e19e7dacd88dfe4a.png'
);

const SandObject = createItemObject(
  'Sand',
  'https://imgpng.ru/d/sand_PNG1.png'
);
const GlassObject = createItemObject(
  'Glass',
  'https://pngicon.ru/file/uploads/bokal.png'
);
const FirewoodObject = createItemObject(
  'Firewood',
  'https://www.pngmart.com/files/11/Firewood-Sacked-Transparent-PNG.png'
);
const ClayObject = createItemObject(
  'Clay',
  'https://www.pngplay.com/wp-content/uploads/13/Greek-Pottery-Art-No-Background.png'
);
const BrickObject = createItemObject(
  'Brick',
  'https://imgpng.ru/d/brick_PNG3331.png'
);
const AshObject = createItemObject(
  'Ash',
  'https://wiki.teamfortress.com/w/images/thumb/b/b8/Pile_of_Ash.png/250px-Pile_of_Ash.png'
);
const StormObject = createItemObject(
  'Storm',
  'https://www.pngall.com/wp-content/uploads/6/Storm.png'
);
const CoalObject = createItemObject(
  'Coal',
  'https://imgpng.ru/d/coal_PNG16.png'
);
const LifeObject = createItemObject(
  'Life',
  'https://www.pngall.com/wp-content/uploads/1/Life-PNG-Image.png'
);
const SwampObject = createItemObject(
  'Swamp',
  'https://img.freepik.com/free-vector/moss-on-stone-in-marsh-cartoon-rock-in-swamp-jungle_105738-1326.jpg'
);
const GreenObject = createItemObject(
  'Green',
  'https://pngicon.ru/file/uploads/trava.png'
);
const AlcoholObject = createItemObject(
  'Alcohol',
  'https://www.pngplay.com/wp-content/uploads/13/Ethanol-PNG-HD-Quality.png'
);
const DustObject = createItemObject(
  'Dust',
  'https://png.pngtree.com/png-clipart/20200701/big/pngtree-dust-dust-png-image_5405383.png'
);
const LavaObject = createItemObject(
  'Lava',
  'https://www.pngplay.com/wp-content/uploads/9/Lava-Download-Free-PNG.png'
);
const EarthObject = createItemObject(
  'Earth',
  'https://static.wikia.nocookie.net/minecraft_ru_gamepedia/images/9/91/%D0%9A%D0%B0%D0%BC%D0%B5%D0%BD%D0%B8%D1%81%D1%82%D0%B0%D1%8F_%D0%B7%D0%B5%D0%BC%D0%BB%D1%8F.png'
);
const ButterflyObject = createItemObject(
  'Butterfly',
  'https://www.pngall.com/wp-content/uploads/7/Monarch-Butterfly-PNG-Clipart.png'
);
const BacteryObject = createItemObject(
  'Bactery',
  'https://cdn-icons-png.flaticon.com/512/3254/3254045.png'
);
const BambooObject = createItemObject(
  'Bamboo',
  'https://www.pngplay.com/wp-content/uploads/2/Bamboo-Free-PNG.png'
);
const FruitObject = createItemObject(
  'Fruit',
  'https://pngimg.com/uploads/apricot/small/apricot_PNG12656.png'
);
const BananaObject = createItemObject(
  'Banana',
  'https://free-png.ru/wp-content/uploads/2022/02/free-png.ru-90.png'
);
const PigObject = createItemObject(
  'Pig',
  'https://free-png.ru/wp-content/uploads/2021/05/free-png.ru-406.png'
);
const FireObject = createItemObject(
  'Fire',
  'https://free-png.ru/wp-content/uploads/2021/11/free-png.ru-46.png'
);
const BaconObject = createItemObject(
  'Bacon',
  'https://free-png.ru/wp-content/uploads/2021/02/bekon-f0f7d391.png'
);

export const UNIC_ITEM_OBJECTS = [
  WormObject,
  WindObject,
  LifeObject,
  SwampObject,
  GreenObject,
  EarthObject,
  ButterflyObject,
  BacteryObject,
  BambooObject,
  FruitObject,
  BananaObject,
  PigObject,
  FireObject,
  BaconObject,
];

export const INIT_ITEM_OBJECTS: TItem[] = [
  WaterObject,
  AirObject,
  FireObject,
  EarthObject,
];

const createMatchObject = (
  partsItems: TItem[],
  createdItem: TItem[]
): Record<string, TItem[]> => {
  const names = getItemsNamesWithSlash(partsItems);

  return {
    [names]: createdItem,
  };
};

export const MATCHES: Record<string, TItem[]> = {
  ...createMatchObject([WaterObject, AirObject], [SteamObject]),
  ...createMatchObject([AirObject, FireObject], [EnergyObject]),
  ...createMatchObject([AirObject, EarthObject], [DustObject]),
  ...createMatchObject([EarthObject, FireObject], [LavaObject]),
  ...createMatchObject([WaterObject, EarthObject], [SwampObject]),
  ...createMatchObject([WaterObject, FireObject], [AlcoholObject]),
  ...createMatchObject([WaterObject, LavaObject], [SteamObject, StoneObject]),
  ...createMatchObject([WaterObject, StoneObject], [SandObject]),
  ...createMatchObject([StoneObject, FireObject], [MetallObject]),
  ...createMatchObject([FirewoodObject, FireObject], [CoalObject]),
  ...createMatchObject([FireObject, DustObject], [AshObject]),

  ...createMatchObject([AirObject, LavaObject], [StoneObject]),
  ...createMatchObject([SwampObject, SandObject], [ClayObject]),
  ...createMatchObject([ClayObject, FireObject], [BrickObject]),
  ...createMatchObject([AirObject, EnergyObject], [StormObject]),
  ...createMatchObject([FireObject, SandObject], [GlassObject]),
  ...createMatchObject(
    [StoneObject, StoneObject],
    [StoneObject, StoneObject, FireObject]
  ),
};

// вода + воздух = пар
// воздух + огонь = энергия
// воздух + земля = пыль
// земля + огонь = лава
// вода + земля = болото
// вода + огонь = спирт

// вода + лава = пар, камень
// воздух + камень = песок

// камень + огонь = металл
// дерево + огонь = уголь
// огонь + пыль = пепел

// воздух + лава = камень
// болото + песок = глина

// глина + огонь = кирпич
// воздух + энергия = буря
// огонь + песок = стекло
// камень + камень = камень, камень, огонь

// огонь + спирт = энергия
// металл + энергия = электричество
// камень + ракушки = известняк
// дерево + огонь = уголь
// болото + энергия = жизнь
// болото + жизнь = бактерии
// вода + жизнь = водоросли
// бактерии + вода = планктон
// бактерии + планктон = рыба
// бактерии + болото = червь, сера
// камень + планктон = ракушки
// планктон + рыба = кит

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
