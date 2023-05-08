import { Image } from 'antd';
import { type FC } from 'react';
import { type TItem } from 'src/shared';
import styles from './item.module.scss';

interface TItemProps {
  item: TItem;
  onClick?: VoidFunction;
}

export const Item: FC<TItemProps> = ({ item: { name, imgSrc }, onClick }) => {
  return (
    <div onClick={onClick} className={styles.container}>
      <Image width={60} src={imgSrc} preview={false} />
      {name}
    </div>
  );
};
