"use client";

import { Card } from "@/components/card";
import { FormProduct } from "@/components/FormProduct";
import { Header } from "@/components/Header";
import { HeaderProducts } from "@/components/HeaderProducts";
import { Modal } from "@/components/Modal";
import { useProducts } from "@/hooks/useProducts";
import { IProduct } from "@/lib/schemas/product";
import { useEffect, useState } from "react";

export default function ProductsPage() {
  const { getProducts } = useProducts();
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const { productsData, loadingData, errorData } = getProducts();

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (productsData) {
      setProducts(productsData);
    }
  }, [productsData]);

  return (
    <div className="p-5">
      <Header />

      {loadingData && <p>Loading...</p>}
      {errorData && <p>Error: {errorData.message}</p>}

      <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-5 mt-5 p-10">
        <HeaderProducts
          setProducts={setProducts}
          onAddProduct={handleOpenModal}
        />
        {products?.map((product) => (
          <Card
            key={product.id}
            product={product}
            products={products}
            setProducts={setProducts}
          />
        ))}
      </div>
      {isOpen && (
        <Modal isOpen={isOpen} onClose={handleCloseModal}>
          <FormProduct
            product={{
              id: 0,
              title: "",
              price: 0,
              description: "",
              category: "",
              image: "",
            }}
          />
        </Modal>
      )}
    </div>
  );
}
