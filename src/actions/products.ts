"use server";

import { IProduct } from "@/lib/schemas/product";

export const getProductsData = async (): Promise<IProduct[]> => {
  const response = await fetch("https://fakestoreapi.com/products");
  return response.json();
};

export const createProductData = async (product: IProduct) => {
  const response = await fetch("https://fakestoreapi.com/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
  return response.json();
};

export const updateProductData = async (product: IProduct) => {
  const response = await fetch(
    `https://fakestoreapi.com/products/${product.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    }
  );
  return response.json();
};

export const deleteProductData = async (id: string) => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
    method: "DELETE",
  });
  return response.json();
};
