"use client";

import { useState, useEffect, useMemo } from "react";
import {
  getProductsData,
  createProductData,
  updateProductData,
  deleteProductData,
} from "@/actions/products";
import { IProduct } from "@/lib/schemas/product";
import { IUseProductsReturn } from "@/types/hooks/hooks";

export const useProducts = (): IUseProductsReturn => {
  const [products, setProducts] = useState<IProduct[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

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
      const data = await createProductData(product);
      setProducts((prev) => (prev ? [...prev, data] : [data]));
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
      await updateProductData(product);
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
      await deleteProductData(id.toString());
      setProducts((prev) => (prev ? prev.filter((p) => p.id !== id) : null));
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  const filteredProducts = useMemo(() => {
    if (!products) return [];
    return products.filter((p) =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [products, searchQuery]);

  const searchProducts = (query: string) => {
    setSearchQuery(query.trim() ?? "");
  };

  return {
    products,
    filteredProducts,
    loading,
    error,
    loadProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    searchProducts,
  };
};
