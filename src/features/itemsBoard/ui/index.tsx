import { type FC, useRef } from 'react';
import { type TItem } from 'src/shared';
import styles from './items-list-dnd.module.scss';
import { ItemDnD } from 'src/features/itemDnD';

interface TItemsBoardProps {
  list: TItem[];
}

export const ItemsBoard: FC<TItemsBoardProps> = ({ list }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <div className={styles.list} ref={ref}>
      {list.map((item, index) => (
        <ItemDnD
          containerRef={ref}
          item={item}
          key={`${item.id}/${index}`}
          index={index}
        />
      ))}
    </div>
  );
};
