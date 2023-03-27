import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import styles from "./index.module.scss";
import Link from "next/link";

const Index = ({ product }) => {
  return (
    <Link href={{pathname: "products/[pid]", query: {pid: product._id}}}>
      <div className={styles.wrapper}>
        <div className={styles.imageContainer}>
          <Image
            src={`https://picsum.photos/300/200?random=${Math.random()}`}
            alt={product.name}
            width={300}
            height={200}
          />
        </div>
        <div className={styles.info}>
          <h2>{product.name}</h2>
          <p>{product.price}</p>
          <p>{product.reference}</p>
        </div>
      </div>
    </Link>
  );
};

export default Index;
