import { type FC } from 'react';
import { Space, Typography } from 'antd';

import { ItemListsBlock } from 'src/widgets';

const { Title } = Typography;

export const IndexPage: FC = () => {
  return (
    <Space
      direction="vertical"
      size="middle"
      style={{ display: 'flex', padding: '20px', height: '100vh' }}
    >
      <Title>Alchemy</Title>
      <ItemListsBlock />
    </Space>
  );
};
