import { useState } from "react";
import { IModalState } from "@/types/components/modal";
import {
  UseModalProductProps,
  UseModalProductReturn,
} from "@/types/hooks/hooks";
import { IProduct, defaultProduct } from "@/lib/schemas/product";

export const useModalProduct = ({
  updateProduct,
  createProduct,
  deleteProduct,
}: UseModalProductProps): UseModalProductReturn => {
  const [stateModal, setStateModal] = useState<IModalState>({
    isOpen: false,
    mode: "add",
    product: defaultProduct,
    handleFunction: () => {},
  });

  const wrapperFunction = (func: (product: IProduct) => Promise<void>) => {
    return async (product: IProduct) => {
      await func(product);
      handleCloseModal();
    };
  };

  const handleAddProduct = async () => {
    setStateModal({
      isOpen: true,
      mode: "add",
      product: defaultProduct,
      handleFunction: wrapperFunction(createProduct),
    });
  };

  const handleEditProduct = async (product: IProduct) => {
    setStateModal({
      isOpen: true,
      mode: "edit",
      product: product,
      handleFunction: wrapperFunction(updateProduct),
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
