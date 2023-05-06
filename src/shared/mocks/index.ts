import { atom } from "nanostores";
import { TItem } from "../../entities";
import uuid from "uuidv4";

export const unicItems$ = atom<TItem[]>([
  {
    id: uuid(),
    name: "воздух",
    src: "https://avatanplus.com/files/resources/original/5a06f2c0c961a15fab244139.png",
    isSelected: false,
  },
  {
    id: uuid(),
    name: "Червь",
    isSelected: false,
    src: "https://www.pngmart.com/files/6/Worms-PNG-Picture.png",
  },
  {
    id: uuid(),
    name: "Жизнь",
    isSelected: false,
    src: "https://www.pngall.com/wp-content/uploads/1/Life-PNG-Image.png",
  },
  {
    id: uuid(),
    name: "Болото",
    isSelected: false,
    src: "https://img.freepik.com/free-vector/moss-on-stone-in-marsh-cartoon-rock-in-swamp-jungle_105738-1326.jpg",
  },
]);

export const itemsOnFields$ = atom<TItem[]>([]);

export const itemsListFirst$ = atom<TItem[]>([
  {
    id: uuid(),
    name: "воздух",
    src: "https://avatanplus.com/files/resources/original/5a06f2c0c961a15fab244139.png",
    isSelected: false,
  },
  {
    id: uuid(),
    name: "Жизнь",
    isSelected: false,
    src: "https://www.pngall.com/wp-content/uploads/1/Life-PNG-Image.png",
  },
  {
    id: uuid(),
    name: "трава",
    isSelected: false,
    src: "https://pngicon.ru/file/uploads/trava.png",
  },
  {
    id: uuid(),
    name: "трава",
    isSelected: false,
    src: "https://pngicon.ru/file/uploads/trava.png",
  },
  {
    id: uuid(),
    name: "свинья",
    isSelected: false,
    src: "https://free-png.ru/wp-content/uploads/2021/05/free-png.ru-406.png",
  },
  // { name: "страна", src: "" },
  // { name: "давление", src: "" },
  // { name: "вода", src: "" },
  // { name: "книга", src: "" },
  // { name: "плотина", src: "" },
  // { name: "земля", src: "" },
  // { name: "больной", src: "" },
  // { name: "человек", src: "" },
  // { name: "порох", src: "" },
  // { name: "огонь", src: "" },
  // { name: "алмаз", src: "" },
  // { name: "тростник", src: "" },
  // { name: "воздух", src: "" },
]);

// export const itemsListSecond$ = atom<TItem[]>([
//   {
//     id: 6,
//     name: "Червь",
//     isSelected: false,
//     src: "https://www.pngmart.com/files/6/Worms-PNG-Picture.png",
//   },
//   {
//     id: 7,
//     name: "Болото",
//     isSelected: false,
//     src: "https://img.freepik.com/free-vector/moss-on-stone-in-marsh-cartoon-rock-in-swamp-jungle_105738-1326.jpg",
//   },
//   {
//     id: 8,
//     name: "земля",
//     isSelected: false,
//     src: "https://static.wikia.nocookie.net/minecraft_ru_gamepedia/images/9/91/%D0%9A%D0%B0%D0%BC%D0%B5%D0%BD%D0%B8%D1%81%D1%82%D0%B0%D1%8F_%D0%B7%D0%B5%D0%BC%D0%BB%D1%8F.png",
//   },
//   {
//     id: 9,
//     name: "фрукт",
//     isSelected: false,
//     src: "https://pngimg.com/uploads/apricot/small/apricot_PNG12656.png",
//   },
//   {
//     id: 10,
//     name: "огонь",
//     isSelected: false,
//     src: "https://free-png.ru/wp-content/uploads/2021/11/free-png.ru-46.png",
//   },
// { name: "картофель", src: "" },
// { name: "нефть", src: "" },
// { name: "цемент", src: "" },
// { name: "книга", src: "" },
// { name: "зверь", src: "" },
// { name: "вода", src: "" },
// { name: "кирпичный дом", src: "" },
// { name: "грипп", src: "" },
// { name: "металл", src: "" },
// { name: "свекла", src: "" },
// { name: "инструмент", src: "" },
// { name: "инструмент", src: "" },
// { name: "энергия", src: "" },
// ]);

// "Бабочка" = "воздух", "Червь"
// "Бактерия" = "Жизнь", "Болото"
// "Бамбук" = "трава", "земля"
// "Банан" = "трава", "фрукт"
// "Бекон" = "свинья", "огонь"
// "Беларусь" = "страна", "картофель"
// "Бензин" = "давление", "нефть"
// "Бетон" = "вода", "цемент"
// "Библиотека" = "книга", "книга"
// "Бобр" = "плотина", "зверь"
// "Болото" = "земля", "вода"
// "Больница" = "больной", "кирпичный" дом
// "Больной" = "человек", "грипп"
// "Бомба" = "порох", "металл"
// "Борщ" = "огонь", "свекла"
// "Бриллиант" = "алмаз", "инструмент"
// "Бумага" = "тростник", "инструмент"
// "Буря" = "воздух", "энергия"
