"use client";

import { useProducts } from "@/hooks/useProducts";

export default async function ProductsPage() {
  const { getProducts } = useProducts();
  const { productsData, loadingData, errorData } = await getProducts();
  return (
    <div>
      <h1>Products</h1>
      {loadingData && <p>Loading...</p>}
      {errorData && <p>Error: {errorData.message}</p>}
      <ul>
        {productsData?.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
}
