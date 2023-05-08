import { type FC, useRef } from 'react';
import { ItemDnD } from 'src/entities';
import { type TItem } from 'src/shared';
import styles from './items-list-dnd.module.scss';

interface TItemsBoardProps {
  list: TItem[];
}

export const ItemsBoard: FC<TItemsBoardProps> = ({ list }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  return (
    <div className={styles.list} ref={ref}>
      {list.map((item, index) => (
        <ItemDnD containerRef={ref} item={item} key={item.id} index={index} />
      ))}
    </div>
  );
};
