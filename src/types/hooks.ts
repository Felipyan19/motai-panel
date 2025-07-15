import { IProduct } from "@/lib/schemas/product";
import { ModalState, ModalActions } from "./modal";

export interface ProductOperations {
  updateProduct: (product: IProduct) => Promise<void>;
  createProduct: (product: IProduct) => Promise<void>;
  deleteProduct: (id: number) => Promise<void>;
  searchProducts?: (query: string) => void;
}

export type UseModalProductProps = ProductOperations;

export interface UseModalProductReturn extends ModalActions {
  stateModal: ModalState;
}

export interface UseProductsReturn extends ProductOperations {
  products: IProduct[] | null;
  filteredProducts: IProduct[] | null;
  loading: boolean;
  error: Error | null;
  loadProducts: () => Promise<void>;
}
