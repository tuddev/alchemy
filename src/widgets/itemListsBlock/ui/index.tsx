import { type FC } from 'react';
import { Space } from 'antd';
import { useStore } from '@nanostores/react';
import { unicItems$ } from 'src/entities/item';
import { ItemsList, ItemsBoard } from 'src/features';
import { movedItems$ } from 'src/entities/item/model';

export const ItemListsBlock: FC = () => {
  const movedItems = useStore(movedItems$);
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
      <ItemsBoard list={movedItems.items} />
      <ItemsList list={unicItems} />
    </Space>
  );
};
