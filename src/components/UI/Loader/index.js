import React from 'react';
import styles from './index.module.scss';

const Index = () => {
    return (
        <div className={styles.loader}>
          <svg
            className={styles.spinner}
            width="65px"
            height="65px"
            viewBox="0 0 66 66"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              className={styles.path}
              fill="none"
              strokeWidth="6"
              strokeLinecap="round"
              cx="33"
              cy="33"
              r="30"
            ></circle>
          </svg>
        </div>
    );
}

export default Index;
