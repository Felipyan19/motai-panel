"use client";

import { IProduct } from "@/lib/schemas/product";

export const Card = ({
  product,
  onEditProduct,
  onDeleteProduct,
}: {
  product: IProduct;
  onEditProduct: (product: IProduct) => void;
  onDeleteProduct: (product: IProduct) => void;
}) => {

  return (
    <div className="border border-gray-300 rounded-lg p-4 bg-white shadow-sm">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-[200px] object-cover rounded"
      />
      <h3 className="my-3 text-lg">{product.title}</h3>
      <p className="text-gray-600 text-sm my-2">{product.description}</p>
      <div className="flex justify-between items-center">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => onEditProduct(product)}
        >
          Edit
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={() => onDeleteProduct(product)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
