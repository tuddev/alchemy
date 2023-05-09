import { useStore } from '@nanostores/react';
import {
  type FC,
  type MutableRefObject,
  useEffect,
  useRef,
  type MouseEventHandler,
} from 'react';
import { movedItems$ } from 'src/features/itemsBoard';
import { type TItem } from 'src/shared';
import { Item } from 'src/entities/index';

import styles from './item-dnd.module.scss';
import { moveAt, getXYCoorsOfMovedItem } from '../model';

interface TItemDnDProps {
  item: TItem;
  index: number;
  containerRef: MutableRefObject<HTMLDivElement | null>;
}

export const ItemDnD: FC<TItemDnDProps> = ({ item, containerRef }) => {
  const itemRef = useRef<HTMLDivElement | null>(null);
  const movedItems = useStore(movedItems$);

  // useEffect(() => {
  //   if (!itemRef.current) return;
  //   itemRef.current.style.left = getRandomInt(0, 600) + 'px';
  //   itemRef.current.style.top = getRandomInt(0, 500) + 'px';
  // }, []);

  useEffect(() => {
    if (!itemRef.current) return;
    const initItem = {
      id: item.id,
      height: itemRef.current.offsetHeight,
      width: itemRef.current.offsetWidth,
      left: Number.parseInt(itemRef.current.style.left),
      top: Number.parseInt(itemRef.current.style.top),
    };

    const { items } = movedItems$.get();
    const movedItems = items.filter((curItem) => curItem.id !== initItem.id);

    movedItems$.set({
      items: [...movedItems, { ...initItem }],
      last: null,
    });
  }, [itemRef.current?.style.left, itemRef.current?.style.top]);

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
      id: item.id,
      height: itemRef.current.offsetHeight,
      width: itemRef.current.offsetWidth,
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
    >
      <Item item={item} />
    </div>
  );
};
