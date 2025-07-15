import { IProduct } from "@/lib/schemas/product";

export type IModalMode = "add" | "edit" | "delete";

export interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title: string;
}

export interface IModalState {
  isOpen: boolean;
  mode: IModalMode;
  product: IProduct;
  handleFunction: (product: IProduct) => void;
}

export interface IModalActions {
  handleEditProduct: (product: IProduct) => Promise<void>;
  handleDeleteProduct: (product: IProduct) => Promise<void>;
  handleAddProduct: () => Promise<void>;
  handleCloseModal: () => void;
  confirmDeleteProduct: () => Promise<void>;
}
