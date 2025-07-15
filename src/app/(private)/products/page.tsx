"use client";

import { Card } from "@/components/products/Card";
import { FormProduct } from "@/components/products/FormProduct";
import { Header } from "@/components/layout/Header";
import { HeaderProducts } from "@/components/products/HeaderProducts";
import { Modal } from "@/components/ui/Modal";
import { useProducts } from "@/hooks/useProducts";
import { useModalProduct } from "@/hooks/useModalProduct";
import { ConfirmationModal } from "@/components/ui/ConfirmationModal";
import { IProduct } from "@/lib/schemas/product";
import { LoadingSkeleton } from "@/components/products/loadingSkeleton";
import { ErrorFetch } from "@/components/products/ErrorFetch";

export default function ProductsPage() {
  const {
    filteredProducts,
    loading,
    error,
    updateProduct,
    createProduct,
    deleteProduct,
    searchProducts,
    loadProducts,
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
    <div className="bg-dark-bg h-screen p-7">
      <Header />

      <HeaderProducts
        onAddProduct={handleAddProduct}
        onSearch={searchProducts}
      />

      <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-5 p-10">
        {filteredProducts?.map((product: IProduct) => (
          <Card
            key={product.id}
            product={product} 
            onEditProduct={handleEditProduct}
            onDeleteProduct={handleDeleteProduct}
          />
        ))}
        {loading &&
          Array.from({ length: 8 }).map((_, index) => (
            <LoadingSkeleton key={index} />
          ))}
      </div>

        {error && (
          <ErrorFetch error={error?.message ?? ""} onLoad={loadProducts} />
        )}

      {stateModal.isOpen && (
        <Modal
          isOpen={stateModal.isOpen}
          onClose={handleCloseModal}
          title={
            stateModal.mode === "add"
              ? "Add Product"
              : stateModal.mode === "edit"
              ? "Edit Product"
              : "Delete Product"
          }
        >
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
