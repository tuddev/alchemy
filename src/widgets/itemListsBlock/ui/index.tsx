import { type FC } from 'react';
import { Space } from 'antd';
import { useStore } from '@nanostores/react';
import { itemsOnBoard$, unicItems$ } from 'src/entities/item';
import { ItemsList, ItemsBoard } from 'src/features';

export const ItemListsBlock: FC = () => {
  const itemsOnBoard = useStore(itemsOnBoard$);
  const unicItems = useStore(unicItems$);

  return (
    <Space
      direction="vertical"
      size="middle"
      style={{
        display: 'flex',
        padding: '20px',
        justifyContent: 'space-between',
        height: '100%',
      }}
    >
      <ItemsBoard list={itemsOnBoard} />
      <ItemsList list={unicItems} />
    </Space>
  );
};
