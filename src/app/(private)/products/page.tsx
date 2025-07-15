"use client";

import { Card } from "@/components/Card";
import { FormProduct } from "@/components/FormProduct";
import { Header } from "@/components/Header";
import { HeaderProducts } from "@/components/HeaderProducts";
import { Modal } from "@/components/Modal";
import { useProducts } from "@/hooks/useProducts";
import { IProduct } from "@/lib/schemas/product";
import { useState } from "react";

interface IStateModal {
  isOpen: boolean;
  mode: "add" | "edit";
  product: IProduct | null;
  handleFunction: (product: IProduct) => void;
}

const defaultProduct: IProduct = {
  id: 0,
  title: "",
  price: 0,
  description: "",
  category: "",
  image: "",
};

export default function ProductsPage() {
  const {
    products,
    loading,
    error,
    updateProduct,
    createProduct,
    deleteProduct,
  } = useProducts();
  const [stateModal, setStateModal] = useState<IStateModal>({
    isOpen: false,
    mode: "add",
    product: null,
    handleFunction: () => {},
  });

  const handleEditProduct = async (product: IProduct) => {
    setStateModal({
      isOpen: true,
      mode: "edit",
      product: product,
      handleFunction: updateProduct,
    });
  };

  const handleDeleteProduct = async (product: IProduct) => {
    try {
      await deleteProduct(product.id);
    } catch (err) {
      console.error("Failed to delete product:", err);
    }
  };

  const handleAddProduct = async (product: IProduct) => {
    setStateModal({
      isOpen: true,
      mode: "add",
      product: product,
      handleFunction: createProduct,
    });
  };

  const handleCloseModal = () => {
    setStateModal({
      isOpen: false,
      mode: "add",
      product: null,
      handleFunction: () => {},
    });
  };

  return (
    <div className="p-5">
      <Header />

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}

      <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-5 mt-5 p-10">
        <HeaderProducts onAddProduct={handleAddProduct} />
        {products?.map((product) => (
          <Card
            key={product.id}
            product={product}
            onEditProduct={handleEditProduct}
            onDeleteProduct={handleDeleteProduct}
          />
        ))}
      </div>
      {stateModal.isOpen && (
        <Modal isOpen={stateModal.isOpen} onClose={handleCloseModal}>
          <FormProduct
            product={stateModal.product || defaultProduct}
            onSubmit={stateModal.handleFunction}
          />
        </Modal>
      )}
    </div>
  );
}
