"use client"

import { useStateData } from "@/hooks/useStateData";
import {
  getProductsData,
  createProductData,
  updateProductData,
  deleteProductData,
} from "@/actions/products";
import { IProduct } from "@/lib/schemas/product";

export const useProducts = () => {
  const getProducts = () => {
    const {
      data: productsData,
      loading: loadingData,
      error: errorData,
    } = useStateData<IProduct[]>(getProductsData);

    return {
      productsData,
      loadingData,
      errorData,
    };
  };

  const createProduct = (product: IProduct) => {
    const {
      data: productsData,
      loading: loadingData,
      error: errorData,
    } = useStateData<IProduct[]>(() => createProductData(product));

    return {
      productsData,
      loadingData,
      errorData,
    };
  };

  const updateProduct = (product: IProduct) => {
    const {
      data: productsData,
      loading: loadingData,
      error: errorData,
    } = useStateData<IProduct[]>(() => updateProductData(product));

    return {
      productsData,
      loadingData,
      errorData,
    };
  };

  const deleteProduct = (id: number) => {
    const {
      data: productsData,
      loading: loadingData,
      error: errorData,
    } = useStateData<IProduct[]>(() => deleteProductData(id.toString()));

    return {
      productsData,
      loadingData,
      errorData,
    };
  };

  return {
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct,
  };
};
