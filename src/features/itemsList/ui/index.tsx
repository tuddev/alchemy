import { type FC } from 'react';
import { Space } from 'antd';
import { type TItem } from 'src/shared';
import { Item } from 'src/entities';
import { itemsOnBoard$ } from 'src/entities/item';

interface TItemsListProps {
  list: TItem[];
}

export const ItemsList: FC<TItemsListProps> = ({ list }) => {
  const handleItemClick = (selectedItem: TItem) => () => {
    const itemsOnBoard = itemsOnBoard$.get();
    itemsOnBoard$.set([...itemsOnBoard, selectedItem]);
  };

  return (
    <Space direction="horizontal" size="middle" style={{ display: 'flex' }}>
      {list.map((item, index) => (
        <Item
          item={item}
          key={item.id + index}
          onClick={handleItemClick(item)}
        />
      ))}
    </Space>
  );
};
