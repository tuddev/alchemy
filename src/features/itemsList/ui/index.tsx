import { type FC } from 'react';
import { type TItem } from 'src/shared';
import { Item } from 'src/entities';
import { movedItems$ } from 'src/entities/item/model';
import { getRandomInt } from 'src/entities/item/model/common';
import styles from './items-list.module.scss';
interface TItemsListProps {
  list: TItem[];
}

export const ItemsList: FC<TItemsListProps> = ({ list }) => {
  const handleItemClick = (selectedItem: TItem) => () => {
    const movedItems = movedItems$.get();
    movedItems$.set({
      items: [
        ...movedItems.items,
        {
          ...selectedItem,
          left: getRandomInt(0, 500),
          top: getRandomInt(0, 500),
        },
      ],
      last: movedItems.last,
    });
  };

  return (
    <div className={styles.list}>
      {list.map((item, index) => (
        <Item
          item={item}
          key={item.id + index}
          onClick={handleItemClick(item)}
          className={styles.item}
        />
      ))}
    </div>
  );
};
