"use client";

import { Card } from "@/components/Card";
import { FormProduct } from "@/components/FormProduct";
import { Header } from "@/components/Header";
import { HeaderProducts } from "@/components/HeaderProducts";
import { Modal } from "@/components/Modal";
import { useProducts } from "@/hooks/useProducts";
import { useModalProduct } from "@/hooks/useModalProduct";
import { ConfirmationModal } from "@/components/ConfirmationModal";

export default function ProductsPage() {
  const {
    products,
    filteredProducts,
    loading,
    error,
    updateProduct,
    createProduct,
    deleteProduct,
    searchProducts,
  } = useProducts();

  const {
    stateModal,
    handleEditProduct,
    handleDeleteProduct,
    handleAddProduct,
    handleCloseModal,
    confirmDeleteProduct,
  } = useModalProduct({
    updateProduct,
    createProduct,
    deleteProduct,
  });

  return (
    <div className="p-5">
      <Header />

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}

      <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-5 mt-5 p-10">
        <HeaderProducts
          onAddProduct={handleAddProduct}
          onSearch={searchProducts}
        />
        {filteredProducts?.map((product) => (
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
          {(stateModal.mode === "add" || stateModal.mode === "edit") && (
            <FormProduct
              product={stateModal.product}
              onSubmit={stateModal.handleFunction}
            />
          )}
          {stateModal.mode === "delete" && (
            <ConfirmationModal
              message={`Are you sure you want to delete "${stateModal.product?.title}"?`}
              onConfirm={confirmDeleteProduct}
              onCancel={handleCloseModal}
            />
          )}
        </Modal>
      )}
    </div>
  );
}
