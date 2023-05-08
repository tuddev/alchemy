import { FC, MutableRefObject, useEffect, useRef } from "react";
import { Item } from "src/entities";
import { TItem } from "src/shared";
import styles from "./item-dnd.module.scss";
import { getRandomInt, moveAt } from "../model";

type TItemDnDProps = {
  item: TItem;
  index: number;
  containerRef: MutableRefObject<HTMLDivElement | null>;
};

export const ItemDnD: FC<TItemDnDProps> = ({ item, containerRef }) => {
  const itemRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!itemRef.current) return;
    itemRef.current.style.left = getRandomInt(0, 600) + "px";
    itemRef.current.style.top = getRandomInt(0, 500) + "px";
  }, []);

  const handleMouseDown = () => {
    document.onmousemove = (event) => {
      if (!itemRef.current || !containerRef.current) return;

      moveAt(event, itemRef.current, containerRef.current);
    };

    document.onmouseup = () => {
      document.onmousemove = null;
    };
  };

  const handleDragStart = () => false;

  return (
    <div
      ref={itemRef}
      className={styles.item}
      onDragStart={handleDragStart}
      onMouseDown={handleMouseDown}
    >
      <Item item={item} />
    </div>
  );
};
