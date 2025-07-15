import { IProduct } from "@/lib/schemas/product";

export interface CardProps {
  product: IProduct;
  onEditProduct: (product: IProduct) => void;
  onDeleteProduct: (product: IProduct) => void;
}

export interface FormProductProps {
  product: IProduct;
  onSubmit: (data: IProduct) => void;
}

export interface HeaderProductsProps {
  onAddProduct: () => void;
  onSearch?: (query: string) => void;
}

export interface ConfirmationModalProps {
  message: string;
  onConfirm: () => void;
  onCancel?: () => void;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
