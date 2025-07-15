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
import React from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

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
    <div className="bg-dark-bg min-h-screen p-7">
      <Header />

      <HeaderProducts
        onAddProduct={handleAddProduct}
        onSearch={searchProducts}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-5 px-3 sm:px-6 lg:px-10 py-10"
      >
        <AnimatePresence mode="popLayout">
          {filteredProducts?.map((product: IProduct) => (
            <Card
              key={`product-${product.id}`}
              product={product}
              onEditProduct={handleEditProduct}
              onDeleteProduct={handleDeleteProduct}
            />
          ))}
          {filteredProducts?.length === 0 && !loading && (
            <div className="col-span-full text-center text-dark-text">
              No products found
            </div>
          )}
          {loading &&
            Array.from({ length: 8 }).map((_, index) => (
              <LoadingSkeleton key={`skeleton-${index}`} />
            ))}
        </AnimatePresence>
      </motion.div>

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
