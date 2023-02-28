import React from 'react';
import styles from './index.module.scss';

const Index = ({message}) => {
    return (
        <div className={styles.error}>
            <p>{message}</p>
        </div>
    );
}

export default Index;
