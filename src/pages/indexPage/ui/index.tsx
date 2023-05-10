import { type FC } from 'react';
import { Typography } from 'antd';
import styles from './index-page.module.scss';
import { ItemListsBlock } from 'src/widgets';

const { Title } = Typography;

export const IndexPage: FC = () => {
  return (
    <div className={styles.page}>
      <Title style={{ color: '#eb2f96' }}>Alchemy</Title>
      <ItemListsBlock />
    </div>
  );
};
