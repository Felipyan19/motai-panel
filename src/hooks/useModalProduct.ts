import { useState } from "react";
import { ModalState } from "@/types/modal";
import { UseModalProductProps, UseModalProductReturn } from "@/types/hooks";
import { IProduct, defaultProduct } from "@/lib/schemas/product";

export const useModalProduct = ({
  updateProduct,
  createProduct,
  deleteProduct,
}: UseModalProductProps): UseModalProductReturn => {
  const [stateModal, setStateModal] = useState<ModalState>({
    isOpen: false,
    mode: "add",
    product: defaultProduct,
    handleFunction: () => {},
  });

  const handleAddProduct = async () => {
    setStateModal({
      isOpen: true,
      mode: "add",
      product: defaultProduct,
      handleFunction: createProduct,
    });
  };

  const handleEditProduct = async (product: IProduct) => {
    setStateModal({
      isOpen: true,
      mode: "edit",
      product: product,
      handleFunction: updateProduct,
    });
  };

  const handleDeleteProduct = async (product: IProduct) => {
    setStateModal({
      isOpen: true,
      mode: "delete",
      product: product,
      handleFunction: () => {},
    });
  };

  const confirmDeleteProduct = async () => {
    if (stateModal.product) {
      try {
        await deleteProduct(stateModal.product.id);
        handleCloseModal();
      } catch (err) {
        console.error("Failed to delete product:", err);
      }
    }
  };

  const handleCloseModal = () => {
    setStateModal({
      isOpen: false,
      mode: "add",
      product: defaultProduct,
      handleFunction: () => {},
    });
  };

  return {
    stateModal,
    handleEditProduct,
    handleDeleteProduct,
    handleAddProduct,
    handleCloseModal,
    confirmDeleteProduct,
  };
};
