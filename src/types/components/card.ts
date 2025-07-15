import { IProduct } from "@/lib/schemas/product";

export interface ICardProps {
    product: IProduct;
    onEditProduct: (product: IProduct) => void;
    onDeleteProduct: (product: IProduct) => void;
  }