import { Image, Space } from "antd";
import { FC } from "react";
import { Typography } from "antd";
import { TItem } from "../model";
import styles from "./item.module.scss";

const { Text } = Typography;

type TItemProps = {
  item: TItem;
  onClick: VoidFunction;
};

export const Item: FC<TItemProps> = ({
  item: { id, isSelected, name, src },
  onClick,
}) => {
  return (
    <Space
      direction="vertical"
      size="middle"
      style={{ display: "flex" }}
      onClick={onClick}
    >
      {isSelected ? (
        <div className={styles.container}>
          <Image width={60} src={src} preview={false} />
        </div>
      ) : (
        <Image width={60} src={src} preview={false} />
      )}
      <Text>{name}</Text>
    </Space>
  );
};
