import { IProduct } from "@/lib/schemas/product";

export interface IFormProductProps {
    product: IProduct;
    onSubmit: (data: IProduct) => void;
  }