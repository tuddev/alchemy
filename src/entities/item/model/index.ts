import { atom } from "nanostores";
import uuid from "uuidv4";

export type TItem = {
  id: string;
  name: string;
  isSelected: boolean;
  src: string;
};

export const ItemsMatch: Record<string, TItem> = {
  ["воздух/Червь"]: {
    id: uuid(),
    name: "Бабочка",
    src: "https://www.pngall.com/wp-content/uploads/7/Monarch-Butterfly-PNG-Clipart.png",
    isSelected: false,
  },
  ["Жизнь/Болото"]: {
    id: uuid(),
    name: "Бактерия",
    isSelected: false,
    src: "https://cdn-icons-png.flaticon.com/512/3254/3254045.png",
  },
  ["трава/земля"]: {
    id: uuid(),
    name: "Бамбук",
    isSelected: false,
    src: "https://www.pngplay.com/wp-content/uploads/2/Bamboo-Free-PNG.png",
  },
  ["трава/фрукт"]: {
    id: uuid(),
    name: "Банан",
    isSelected: false,
    src: "https://free-png.ru/wp-content/uploads/2022/02/free-png.ru-90.png",
  },
  ["свинья/огонь"]: {
    id: uuid(),
    name: "Бекон",
    isSelected: false,
    src: "https://free-png.ru/wp-content/uploads/2021/02/bekon-f0f7d391.png",
  },
};

export const currentItems$ = atom<TItem[]>([]);
