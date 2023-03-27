import useFetch from "@/hooks/useFetch";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";

const Index = () => {
  const router = useRouter();
  const { pid } = router.query;
  const [productId, setProductId] = useState("");
  const [productData, setProductData] = useState({});
  let { isLoading, error, data, fetchData } = useFetch(
    `/product/${productId}`,
    null,
    "GET"
  );
  useEffect(() => {
    if (router.isReady) {
      setProductId(pid);
    }
    if (productId) {
      fetchData();
    }
  }, [productId, router.isReady]);

  useEffect(() => {
    if(data)
        setProductData(data.product)
  }, [data])
  return (
    <div className={styles.container}>
      <div className={styles.image_container}>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <Image
            src={`https://picsum.photos/500/500?random=${Math.random()}`}
            alt={"oui"}
            width={500}
            height={500}
          />
        )}
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.information_container}>
          <h2>{data.name}</h2>
          <p>{data.price}</p>
          <p>{data.reference}</p>
          <p>{data.description}</p>
        </div>
      )}
    </div>
  );
};

export default Index;
