import { FC } from "react";
import { Space } from "antd";
import { useStore } from "@nanostores/react";
import { itemsOnFields$, unicItems$ } from "src/entities/item";
import { ItemsList, ItemsBoard } from "src/features";

export const ItemListsBlock: FC = () => {
  const itemsOnFields = useStore(itemsOnFields$);
  const unicItems = useStore(unicItems$);

  return (
    <Space
      direction="vertical"
      size="middle"
      style={{
        display: "flex",
        padding: "20px",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <ItemsBoard list={itemsOnFields} />
      <ItemsList list={unicItems} />
    </Space>
  );
};
