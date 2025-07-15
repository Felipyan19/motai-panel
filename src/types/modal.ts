import { IProduct } from "@/lib/schemas/product";

export type ModalMode = "add" | "edit" | "delete";

export interface ModalState {
  isOpen: boolean;
  mode: ModalMode;
  product: IProduct;
  handleFunction: (product: IProduct) => void;
}

export interface ModalActions {
  handleEditProduct: (product: IProduct) => Promise<void>;
  handleDeleteProduct: (product: IProduct) => Promise<void>;
  handleAddProduct: () => Promise<void>;
  handleCloseModal: () => void;
  confirmDeleteProduct: () => Promise<void>;
}
