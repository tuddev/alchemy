import { type FC } from 'react';
import { type TItem } from 'src/shared';
import { Item } from 'src/entities';
import { movedItems$ } from 'src/entities/item/model';
import { getRandomInt } from 'src/entities/item/model/common';
import styles from './items-list.module.scss';
import { Card, Typography } from 'antd';

const { Title } = Typography;
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
          left: getRandomInt(0, 300),
          top: getRandomInt(0, 300),
        },
      ],
      last: movedItems.last,
    });
  };

  return (
    <Card className={styles.list} color="#fff0f6">
      <Title level={3} style={{ marginTop: 0, color: '#eb2f96' }}>
        Unic items
      </Title>
      <div className={styles.items}>
        {list.map((item, index) => (
          <Card.Grid
            key={item.id + index}
            className={styles.grid}
            onClick={handleItemClick(item)}
          >
            <Item
              item={item}
              key={item.id + index}
              onClick={handleItemClick(item)}
              className={styles.item}
            />
          </Card.Grid>
        ))}
      </div>
    </Card>
  );
};
