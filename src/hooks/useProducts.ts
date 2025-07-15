"use client";

import { useState, useEffect } from "react";
import {
  getProductsData,
  createProductData,
  updateProductData,
  deleteProductData,
} from "@/actions/products";
import { IProduct } from "@/lib/schemas/product";
import { UseProductsReturn } from "@/types/hooks";

export const useProducts = (): UseProductsReturn => {
  const [products, setProducts] = useState<IProduct[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getProductsData();
      setProducts(data);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  const createProduct = async (product: IProduct) => {
    setLoading(true);
    setError(null);
    try {
      console.log("product to create", product);
      const data = await createProductData(product);
      console.log("product created", data);
      setProducts((prev) => prev ? [...prev, data] : [data]);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  const updateProduct = async (product: IProduct) => {
    setLoading(true);
    setError(null);
    try {
      const data = await updateProductData(product);
      console.log("product updated", data);
      setProducts((prev) =>
        prev ? prev.map((p) => (p.id === product.id ? product : p)) : [product]
      );
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  const deleteProduct = async (id: number) => {
    setLoading(true);
    setError(null);
    try {
      const data = await deleteProductData(id.toString());
      console.log("product deleted", data);
      setProducts((prev) => prev ? prev.filter((p) => p.id !== id) : null);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  return {
    products,
    loading,
    error,
    loadProducts,
    createProduct,
    updateProduct,
    deleteProduct,
  };
};
