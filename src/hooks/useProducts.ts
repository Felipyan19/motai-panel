"use client";

import { useStateData } from "./useStateData";
import {
  getProductsData,
} from "../app/(private)/products/actions";
import { IProduct } from "@/lib/schemas/product";

export const useProducts = () => {
  const getProducts = async () => {
    const { data, loading, error } = useStateData<IProduct[]>(getProductsData);
    return { productsData: data, loadingData: loading, errorData: error };
  };

  return {
    getProducts,
  };
};
