import { useStore } from '@nanostores/react';
import {
  type FC,
  type MutableRefObject,
  useRef,
  type MouseEventHandler,
  useEffect,
} from 'react';
import { type TItem } from 'src/shared';
import { Item } from 'src/entities/index';

import styles from './item-dnd.module.scss';
import { moveAt, getXYCoorsOfMovedItem } from '../model';
import { movedItems$ } from 'src/entities/item/model';

interface TItemDnDProps {
  item: TItem;
  index: number;
  containerRef: MutableRefObject<HTMLDivElement | null>;
}

export const ItemDnD: FC<TItemDnDProps> = ({ item, containerRef }) => {
  const itemRef = useRef<HTMLDivElement | null>(null);
  const movedItems = useStore(movedItems$);

  useEffect(() => {
    if (!itemRef.current) return;
    const currentItem = movedItems.items.find(
      (movedItem) => movedItem.id === item.id
    );

    if (currentItem) {
      currentItem.height = itemRef.current.offsetHeight;
      currentItem.width = itemRef.current.offsetWidth;

      const restItems = movedItems.items.filter(
        (restItem) => restItem.id !== currentItem.id
      );

      movedItems$.set({
        items: [...restItems, currentItem],
        last: currentItem,
      });
    }
  }, []);

  const handleMouseDown = () => {
    if (!itemRef.current) return;
    itemRef.current.style.zIndex = '1001';

    document.onmousemove = (event) => {
      if (!itemRef.current || !containerRef.current) return;

      moveAt(event, itemRef.current, containerRef.current);
    };

    document.onmouseup = () => {
      document.onmousemove = null;
    };
  };

  const handleDragStart = () => false;

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const handleMouseUp: MouseEventHandler<HTMLDivElement> = (
    event: MouseEvent
  ) => {
    if (!itemRef.current) return;
    itemRef.current.style.zIndex = '1000';
    const { x, y } = getXYCoorsOfMovedItem(event, containerRef.current);

    const lastItem = {
      ...item,
      width: itemRef.current.offsetWidth,
      height: itemRef.current.offsetHeight,
      left: x,
      top: y,
    };

    movedItems$.set({ items: movedItems.items, last: lastItem });
  };

  return (
    <div
      ref={itemRef}
      className={styles.item}
      onDragStart={handleDragStart}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      style={{ top: item.top, left: item.left }}
    >
      <Item item={item} />
    </div>
  );
};
