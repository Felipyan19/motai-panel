"use server";

import { IProduct } from "@/lib/schemas/product";
import { API_URL } from "@/lib/config/api";

export const getProductsData = async (): Promise<IProduct[]> => {
  const response = await fetch(`${API_URL.BASE}${API_URL.PRODUCTS.ALL}`);
  return response.json();
};

export const createProductData = async (product: IProduct) => {
  const response = await fetch(`${API_URL.BASE}${API_URL.PRODUCTS.POST}`, {
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
    `${API_URL.BASE}${API_URL.PRODUCTS.PUT.replace(":id", product.id.toString())}`,
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
  const response = await fetch(`${API_URL.BASE}${API_URL.PRODUCTS.DELETE.replace(":id", id)}`, {
    method: "DELETE",
  });
  return response.json();
};
