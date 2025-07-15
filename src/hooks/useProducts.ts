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
import { toast } from "@/lib/utils/toast";

let hasShownLoadedToast = false;

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
      if (!hasShownLoadedToast) {
        toast.success("Products loaded successfully");
        hasShownLoadedToast = true;
      }
    } catch (err) {
      setError(err as Error);
      toast.error("Failed to load products");
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
      toast.success("Product created successfully");
    } catch (err) {
      setError(err as Error);
      toast.error("Product creation failed");
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
      toast.success("Product updated successfully");
    } catch (err) {
      setError(err as Error);
      toast.error("Update failed");
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
      toast.success("Product deleted");
    } catch (err) {
      setError(err as Error);
      toast.error("Delete failed");
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
