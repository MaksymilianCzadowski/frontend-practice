import React from 'react';
import ProdcutCard from '@/components/UI/ProductCard';
import styles from './index.module.scss';

const Index = ({products}) => {
    return (
        <div className={styles.products__container}>
            {
                products.map((product) => {
                    return <ProdcutCard key={product.id} product={product} />;
                })
            }
      </div>
    );
}

export default Index;
