import { Image } from 'antd';
import { type FC } from 'react';
import { type TItem } from 'src/shared';
import styles from './item.module.scss';
import cn from 'classnames';
interface TItemProps {
  item: TItem;
  onClick?: VoidFunction;
  className?: string;
}

export const Item: FC<TItemProps> = ({ item, onClick, className }) => {
  return (
    <div onClick={onClick} className={cn(styles.container, className)}>
      <Image src={item.imgSrc} preview={false} />
      {item.name}
    </div>
  );
};
