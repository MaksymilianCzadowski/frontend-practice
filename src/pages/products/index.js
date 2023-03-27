import useFetch from "@/hooks/useFetch";
import React, { useEffect } from "react";
import ProductGrid from "@/components/UI/ProductsGrid";

const Index = () => {
  const { isLoading, error, data, fetchData } = useFetch(
    "/product/getProducts",
    null,
    "GET"
  );

  const [products, setProducts] = React.useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [data]);

  return (
    <div>
      products page
      <div>
        {isLoading ? (
          <p>Loading products...</p>
        ) : (
          <ProductGrid products={products} />
        )}
      </div>
    </div>
  );
};

export default Index;
