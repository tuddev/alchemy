import { FC } from "react";
import { Space } from "antd";
import { Typography } from "antd";
import { ItemsList } from "../../../features";
import { itemsOnFields$, unicItems$ } from "../../../shared";
import { useStore } from "@nanostores/react";
import { currentItems$ } from "../../../entities";

const { Title } = Typography;

export const IndexPage: FC = () => {
  const currentItems = useStore(currentItems$);
  const itemsOnFields = useStore(itemsOnFields$);
  const unicItems = useStore(unicItems$);

  return (
    <Space
      direction="vertical"
      size="middle"
      style={{ display: "flex", padding: "20px", height: "100vh" }}
    >
      <Title>Alchemy</Title>
      {currentItems.map((item) => (
        <p>{item.name}</p>
      ))}
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
        <ItemsList list={itemsOnFields} />
        <ItemsList list={unicItems} isUnicList />
      </Space>
    </Space>
  );
};
