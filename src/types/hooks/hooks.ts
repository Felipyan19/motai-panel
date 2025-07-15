import { IProduct } from "@/lib/schemas/product";
import { IModalState, IModalActions } from "../components/modal";

export interface IProductOperations {
  updateProduct: (product: IProduct) => Promise<void>;
  createProduct: (product: IProduct) => Promise<void>;
  deleteProduct: (id: number) => Promise<void>;
  searchProducts?: (query: string) => void;
}

export type UseModalProductProps = IProductOperations;

export interface UseModalProductReturn extends IModalActions {
  stateModal: IModalState;
}

export interface IUseProductsReturn extends IProductOperations {
  products: IProduct[] | null;
  filteredProducts: IProduct[] | null;
  loading: boolean;
  error: Error | null;
  loadProducts: () => Promise<void>;
}
