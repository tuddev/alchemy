import { FC, useRef } from "react";
import { ItemDnD } from "src/entities";
import { TItem } from "src/shared";
import styles from "./items-list-dnd.module.scss";

type TItemsBoardProps = {
  list: TItem[];
};

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
