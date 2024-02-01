import React from 'react';

import styles from './NotFoundBlock.module.scss';

export const NotFoundBlock: React.FC = () => {
  return (
    <div className={styles.root}>
      <h1>Not found!</h1>
      <p>Unfortunately this page is missing</p>
    </div>
  );
};
