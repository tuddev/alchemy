import { FC } from "react";
import { Space } from "antd";
import { Item, TItem, currentItems$ } from "../../../entities";
import { useStore } from "@nanostores/react";
import { itemsOnFields$, unicItems$ } from "../../../shared";
import { ItemsMatch } from "../../../entities/item";

type TItemsListProps = {
  list: TItem[];
  isUnicList?: boolean;
};

export const ItemsList: FC<TItemsListProps> = ({ list, isUnicList }) => {
  const itemsOnFields = useStore(itemsOnFields$);
  const unicItems = useStore(unicItems$);
  const currentItems = useStore(currentItems$);

  const handleClickItem = (selectedItem: TItem) => {
    if (isUnicList) {
      return itemsOnFields$.set([...itemsOnFields, selectedItem]);
    }

    if (currentItems.length < 2) {
      const currentItem = itemsOnFields.find(
        (item) => item.id === selectedItem.id
      );

      const itemsOnFieldsWithoutCurrentItem = itemsOnFields.filter(
        (item) => item.id !== selectedItem.id
      );

      if (currentItem) {
        itemsOnFields$.set([
          ...itemsOnFieldsWithoutCurrentItem,
          { ...currentItem, isSelected: true },
        ]);

        currentItems$.set([...currentItems, currentItem]);
      }
    } else {
      const matchItem =
        ItemsMatch[`${currentItems[0].name}/${currentItems[1].name}`];

      if (matchItem) {
        unicItems$.set([matchItem, ...unicItems]);

        const itemsOnFieldsWithoutCurrentItems = itemsOnFields.filter(
          (item) =>
            item.id !== currentItems[0].id && item.id !== currentItems[1].id
        );

        itemsOnFields$.set([...itemsOnFieldsWithoutCurrentItems]);
        currentItems$.set([]);
      }
    }
  };

  return (
    <Space direction="horizontal" size="middle" style={{ display: "flex" }}>
      {list.map((item) => (
        <Item item={item} key={item.id} onClick={() => handleClickItem(item)} />
      ))}
    </Space>
  );
};
